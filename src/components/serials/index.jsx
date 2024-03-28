import { useEffect, useState } from "react";
import MovieCard from "../movie-card"
import './main.scss'
import axios from "axios";
const Serials = () => {

    const [data, setData] = useState()
    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/popular?api_key=22efd7288d974ca35cbbf4df85cdb17d`
            )
            .then(function (response) {
                console.log(response);
                setData(response?.data.results);
            })
            .catch(function (error) {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <div className="serials container">
                <h3>Сериалы</h3>
                <div className="movies">
                    {
                        data?.slice(0,8).map((value, key) => (
                            <MovieCard key={key} data={value} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Serials