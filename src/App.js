import Footer from "./Components/Footer"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MovieContainer from "./Components/MovieContainer"

function App() {
    return (
        <div className="App">
            {/* <Navbar/> */}
            <MovieContainer />
            {/* <Search /> */}
            <Footer />
        </div>
    )
}

export default App
