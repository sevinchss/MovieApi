import Carousel from 'react-bootstrap/Carousel';
import './main.scss'
import BannerImg from '../../assets/images/c227c9ac-5289-4fa2-afb5-88b60b1491f2.jpg'
import { useEffect, useState } from 'react';
import axios from 'axios';
const Banner = () => {

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
            <div className="banner">
                <Carousel indicators={false}>

                    {
                        data?.map((item, key) => (
                            <Carousel.Item>
                                <img src={`https://image.tmdb.org/t/p/w500` + item?.backdrop_path} alt="" />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
        </>
    )
}

export default Banner