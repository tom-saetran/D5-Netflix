import React from "react"

class ShowDetails extends React.Component {
    state = {
        id: this.props.params.id,
        movieData: null
    }

    componentDidMount() {
        let idFromTheURLBar = this.props.match.params.id
        console.log("propsid: " + idFromTheURLBar)
        console.log("stateid: " + this.state.id)
    }

    render() {
        return (
            <>
                {this.state.movieData && (
                    <div>
                        <h1>{this.state.movieData.title}</h1>
                        <img src={this.state.movieData.image} alt="" />
                        <p>{this.state.movieData.description}</p>
                    </div>
                )}
            </>
        )
    }
}

export default ShowDetails
