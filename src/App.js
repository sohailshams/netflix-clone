import './App.css';
import MovieRows from './components/MovieRows';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <MovieRows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <MovieRows title="TRENDIG NOW" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
