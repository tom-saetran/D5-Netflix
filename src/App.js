import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieContainer from './Components/MovieContainer';
import Galleries from './Components/Galleries';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieContainer />
      <Galleries movie="Harry Potter" />
      <Galleries movie="Lord of the Rings" />
      <Galleries movie="Batman" />
      <Footer />
    </div>
  );
}

export default App;
