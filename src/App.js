import React , {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movielist from './components/MovieList'
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/Searchbox';
function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=9c1ed6d4`;
    const responce = await fetch(url);
    const responceJson = await responce.json();

    if (responceJson.Search) {
      setMovies(responceJson.Search);
    }
  }

  useEffect (()=> {
      getMovieRequest(searchValue);
  },[searchValue]);
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading= "Movies"        />
        <SearchBox 
        searchValue = {searchValue} 
        setSearchValue={setSearchValue} />
      </div>

      <div className="row ">
        <Movielist 
          movies = {movies}
        />
      </div>
    </div>
  );
}

export default App;
