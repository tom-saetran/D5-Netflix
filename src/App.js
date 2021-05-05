import Footer from "./Components/Footer"
import NavBar from "./Components/NavBar"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MovieContainer from "./Components/MovieContainer"
import Galleries from "./Components/Galleries"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ShowDetails from "./Components/ShowDetails"

function App() {
    return (
        <Router>
            <NavBar />
            <MovieContainer />
            <Route exact component={ShowDetails} path="/details/:id" />
            <Route exact render={routerProps => <Galleries {...routerProps} movie="Harry Potter" />} path="/" />
            <Route exact render={routerProps => <Galleries {...routerProps} movie="Lord of the Rings" />} path="/" />
            <Route exact render={routerProps => <Galleries {...routerProps} movie="Batman" />} path="/" />
            <Footer />
        </Router>
    )
}

export default App
