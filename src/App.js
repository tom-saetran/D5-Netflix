import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieContainer from './Components/MovieContainer';
import Galleries from './Components/Galleries';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieContainer />
      <Galleries movie="Harry Potter" />
      <Galleries movie="Lord of the Rings" />
      <Galleries movie="Batman" />
      <Footer />
    </div>
  );
}

export default App;
