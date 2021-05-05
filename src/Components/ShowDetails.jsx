import React from "react"

class ShowDetails extends React.Component {
    state = {
        id: this.props.match.params.id,
        movieData: null
    }

    componentDidMount() {
        let idFromTheURLBar = this.props.match.params.id
        console.log("propsid: " + idFromTheURLBar)
        console.log("stateid: " + this.state.id)
        this.getOmbdData()
        this.getCommentData()
    }

    getOmbdData = async () => {
        const API = "http://www.omdbapi.com/"
        const APIKEY = "c71a553d"

        try {
            this.setState({
                isLoading: true
            })

            let response = await fetch(`${API}?apikey=${APIKEY}&i=${this.state.id}`)
            if (response.ok) {
                let data = await response.json()
                this.setState({ movieData: data, isError: false, isLoading: false })
            } else {
                this.setState({ isError: true, isLoading: false })
            }
        } catch (error) {
            console.log(error)
            this.setState({ isError: true, isLoading: false })
        }
    }

    getCommentData = async () => {
        let result = ""
        try {
            result = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.state.id, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGU5Y2IxZjBmYjAwMTVkOTE3MGMiLCJpYXQiOjE2MjAyMTgxNjEsImV4cCI6MTYyMTQyNzc2MX0.59vv9fgaepUpwEKqCRORz0g_U0u8vGS9RuheucGTlW8"
                }
            }).then(result => result.json())
        } catch (error) {
            console.error(error)
            return null
        } finally {
            this.setState({ comments: result })
        }
    }

    render() {
        return (
            <>
                {this.state.movieData ? (
                    <div>
                        <h1 className="text-white text-center">{this.state.movieData.Title}</h1>
                        <img className="justify-content-center" src={this.state.movieData.Poster} alt="" />
                        <p className="text-white text-center">{this.state.movieData.Plot}</p>
                    </div>
                ) : (
                    <p className="text-white text-center">No data!</p>
                )}
            </>
        )
    }
}

export default ShowDetails
