import React , {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movielist from './components/MovieList'
function App() {

  const [movies, setMovies] = useState([
    {
      "Title": "Austin Powers: International Man of Mystery",
      "Year": "1997",
      "imdbID": "tt0118655",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTRhZTY0MDItY2I1Yi00MGE3LTk1ZDEtMjA0ZGZhNDQyNGU0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
  },
  {
      "Title": "Murder Mystery",
      "Year": "2019",
      "imdbID": "tt1618434",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTA2YTI5YjUtZWI4Zi00NWQ5LWFiYmEtOTBmNTUyNDAwNjllXkEyXkFqcGdeQXVyNjIzNzM4NzA@._V1_SX300.jpg"
  },
  {
      "Title": "Mystery Men",
      "Year": "1999",
      "imdbID": "tt0132347",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjZhZmY4NDctNWU5Mi00MGI0LTkzMGUtMjRiZWM2MTdiNjBkXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
  },
  {
      "Title": "Manhattan Murder Mystery",
      "Year": "1993",
      "imdbID": "tt0107507",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMWM5MGZiZDAtMWE0Ny00MjY3LWJlOWItNjY4MmI4NDAyM2NhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
      "Title": "Mystery Train",
      "Year": "1989",
      "imdbID": "tt0097940",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjcyMDYyM2ItYzFlNy00N2FmLTljNTAtODllZjZhNWIwMTVlXkEyXkFqcGdeQXVyNzM0MTUwNTY@._V1_SX300.jpg"
  },
  {
      "Title": "Mystery, Alaska",
      "Year": "1999",
      "imdbID": "tt0134618",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZmE3OTRlOGEtNzExMi00YmI0LWIxMzYtNGU2NzU1ZTY0Y2JkXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
  },
  {
      "Title": "Mystery Science Theater 3000",
      "Year": "1988–1999",
      "imdbID": "tt0094517",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTA0OGRiYTMtMjliYS00ZjZkLWI2ODEtMWI5ZmM5OTBjYmNlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
  },
  {
      "Title": "Mystery Science Theater 3000: The Movie",
      "Year": "1996",
      "imdbID": "tt0117128",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYzNmN2UzNTAtNmZkMS00MmI3LThhNzEtNjI1YjJlN2JiZjU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
      "Title": "Scooby-Doo! Mystery Incorporated",
      "Year": "2010–2013",
      "imdbID": "tt1660055",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjEwMzE1ZGMtMmQzNS00ZGRkLWJmZTQtM2Q3Y2Q5ZTg4ZjQwXkEyXkFqcGdeQXVyNjIyNDgwMzM@._V1_SX300.jpg"
  },
  {
      "Title": "Batman: Mystery of the Batwoman",
      "Year": "2003",
      "imdbID": "tt0346578",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BN2IwYTVlZGQtOTRhNy00MDI5LThmMTUtYWI1MGUwMGFkYzI1XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SX300.jpg"
  }
  ]);
  return (
    <div className="container-fluid movie-app">
      <div className="row ">
        <Movielist 
          movies = {movies}
        />
      </div>
    </div>
  );
}

export default App;
