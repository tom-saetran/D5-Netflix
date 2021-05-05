import Footer from "./Components/Footer"
import NavBar from "./Components/NavBar"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MovieContainer from "./Components/MovieContainer"
import Galleries from "./Components/Galleries"
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom"
import ShowDetails from "./Components/ShowDetails"

function App() {
    return (
        <Router>
            <NavBar />
            <Route exact render={routerProps => <MovieContainer {...routerProps} title="Searchbar" />} path="/" />
            <Route exact render={routerProps => <ShowDetails {...routerProps} title="Show Details" />} path="/details/:id" />
            <Route exact render={routerProps => <Galleries {...routerProps} title="Harry Potter Gallery" movie="Harry Potter" />} path="/" />
            <Route exact render={routerProps => <Galleries {...routerProps} title="LotR Gallery" movie="Lord of the Rings" />} path="/" />
            <Route exact render={routerProps => <Galleries {...routerProps} title="Batman Gallery" movie="Batman" />} path="/" />
            <Footer />

            <Route>
                <NoRoute />
            </Route>
        </Router>
    )
}

const NoRoute = () => {
    let location = useLocation()

    return (
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    )
}

export default App
