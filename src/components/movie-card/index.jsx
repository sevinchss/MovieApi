import './main.scss'
const MovieCard = ({data}) => {
    return (
        <>
            <div className="movie-card">
                <div className="movie-img">
                    <img src={`https://image.tmdb.org/t/p/w500` + data?.backdrop_path} alt="" />
                </div>
                <div className="movie-title">
                    <h2> {data?.original_title}</h2>
                </div>
                <div className="movie-info">
                    <p>{data?.release_date}</p>
                </div>
            </div>
        </>
    )
}

export default MovieCard