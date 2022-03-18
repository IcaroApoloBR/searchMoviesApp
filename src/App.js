import { useEffect } from 'react';

// OMDBAPI KEY => c20e6a59
const API_URL = 'http://www.omdbapi.com?apikey=c20e6a59'

const App = () => {

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }
    
    useEffect(() => {
        searchMovies('Avengers');
    }, []);
    
    return (
        <h1>App</h1>
    );
}

export default App;