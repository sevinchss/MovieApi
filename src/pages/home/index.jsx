import Banner from "../../components/banner"
import { Canals } from "../../components/canals/Canals"
import Header from "../../components/header"
import Serials from "../../components/serials"
import TopRated from "../../components/top-rated"
import UpComing from "../../components/upcoming"

const Home = () => {
    return (
        <>
            <div className="home">
                <Header />
                <div className="banner">
                    <Banner />
                </div>
                <div className="serials mb-4">
                    {/* <Serials /> */}
                </div>
                <div className="serials mb-4">
                    <TopRated/>
                </div>
                <div className="serials mb-4">
                    <UpComing />
                </div>
                <div className="canals mb-4">
                    <Canals />
                </div>
            </div>
        </>
    )
}

export default Home