import '../../src/MovieContainer.css';

const MovieContainer = () => {
    return (
        <div className="container-fluid pl-5 pr-0">
            <div className="genre-details">
                <div className="d-flex">
                    <h3 className="text-light">TV Shows</h3>
                    <div className="btn-group">
                        <button type="button" className="btn btn-color dropdown-toggle ml-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Genres
                         </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Dram</a>
                            <a className="dropdown-item" href="#">something</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" className="btn btn-outline-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
                            </svg>
                        </button>
                        <button type="button" className="btn btn-outline-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid" viewBox="0 0 16 16">
                                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            <h3 className="mt-4 text-white">Trending Now</h3>
            <div className="row no-gutters mb-4 testimonial-group">
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media0.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media1.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media2.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media3.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media4.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media5.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media6.jpg" alt="newImage" />
                </div>
            </div>

            <h3 className="text-white">Watch It Again</h3>

            <div className="row no-gutters mb-4 testimonial-group">
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media7.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media8.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media9.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media10.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media11.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media12.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media13.jpg" alt="newImage" />
                </div>
            </div>

            <h3 className="text-white">New Releases</h3>
            <div className="row no-gutters mb-4 testimonial-group">
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media14.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media15.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media16.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media17.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media18.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media19.jpg" alt="newImage" />
                </div>
                <div className="col-xs-4 text-center mb-3 mb-lg-0 px-1">
                    <img className="img-fluid rounded" src="media/media20.jpg" alt="newImage" />
                </div>
            </div>
        </div>
    );
}

export default MovieContainer;