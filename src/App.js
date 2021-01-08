import './App.css';
import Banner from './components/Banner';
import MovieRows from './components/MovieRows';
import requests from './requests';

function App() {
  return (
    <div className="app">
      <Banner />
      <MovieRows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <MovieRows title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MovieRows title="Top Rated" fetchUrl={requests.fetchToRated} />
      <MovieRows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MovieRows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MovieRows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MovieRows
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <MovieRows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
