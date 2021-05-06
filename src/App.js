import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import MovieContainer from "./Components/MovieContainer"
import Galleries from "./Components/Galleries"
import ShowDetails from "./Components/ShowDetails"
import CreateAccount from "./Components/CreateAccount"
import TOS from "./Components/TOS"

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <MovieContainer title="Searchbar" />
                    <Galleries movie="Harry Potter" title="Harry Potter Movies" />
                    <Galleries movie="Lord of the Rings" title="Lotr Movies" />
                    <Galleries movie="Batman" title="Batman Movies" />
                </Route>

                <Route exact render={routerProps => <ShowDetails {...routerProps} title="Show Details" />} path="/details/:id" />
                <Route exact render={routerProps => <CreateAccount {...routerProps} title="Create Account" />} path="/register" />
                <Route exact render={routerProps => <TOS {...routerProps} title="Terms of Service" />} path="/tos" />

                <Route component={NoRoute} />
            </Switch>
            <Footer />
        </Router>
    )
}

const NoRoute = () => {
    let location = useLocation()

    return (
        <h3 className="text-center text-danger">
            No match for <code>{location.pathname}</code>
        </h3>
    )
}

export default App
