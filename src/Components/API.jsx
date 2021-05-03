import React from "react"

class API extends React.Component {
    state = {
        endpoint: this.props.endpoint,
        endpoint_query: this.props.endpoint_query,
        authentication_token: this.props.authentication_token,
        metrics: {},
        status: -1
        // -1 = idle
        //  0 = initializing, error checking request
        //  1 = request started, spinner visible
        //  2 = data successfully recieved
        //  3 = data processed and ready
        //  4 = spinner invisible and return data
        //  5 = error while processing data
    }

    componentDidMount = () => {
        this.setState((this.metrics.mountTime = new Date.now()))
    }

    componentDidUpdate = previousState => {
        if (this.state.status !== previousState.status) {
            switch (this.state.status) {
                case 0:
                    this.setState((this.metrics.status0 = new Date.now()))
                    break
                case 1:
                    this.setState((this.metrics.status1 = new Date.now()))
                    break
                case 2:
                    this.setState((this.metrics.status2 = new Date.now()))
                    break
                case 3:
                    this.setState((this.metrics.status3 = new Date.now()))
                    break
                case 4:
                    this.setState((this.metrics.status4 = new Date.now()))
                    break
                case 5:
                    this.setState((this.metrics.failed = true))
                    this.setState((this.metrics.status5 = new Date.now()))
                    break
                default:
                    throw new Error("ERROR - this.state.status is out of range")
            }
        }
    }

    componentWillUnmount = () => {
        localStorage.setItem("Metrics-" + new Date.now(), this.state.metrics) // replace with POST?
    }

    //CRUD - Create(POST), Read(GET), Update(PUT), Delete(DELETE)

    postToAPI = () => {}

    getFromAPI = async () => {
        this.setState({ status: 0 })

        if (this.state.endpoint === "") return null

        let result = ""
        try {
            this.setState({ status: 1 })

            // Spawn spinner here

            result = await fetch(this.state.endpoint + this.state.endpoint_query, {
                headers: {
                    Authentication: this.state.authentication_token ? this.state.authentication_token : ""
                }
            })
            if (!result.status.ok) throw new Error("ERROR - result.status.ok is false")
            this.setState({ status: 2 })
            result = await result.json()
            this.setState({ status: 3 })
        } catch (error) {
            this.setState({ status: 5 })
            // Remove spinner here
            console.error(error)
            return null // replace with error toast?
        } finally {
            this.setState({ status: 4 })
            // Remove spinner here
            return result
        }
    }

    putToAPI = () => {}
    deleteFromAPI = () => {}
}

export default API
