import About from "../../components/about/About";
import Banner from "../../components/banner/Banner";
import Brands from "../../components/brands/Brands";
import Reviews from "../../components/reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <About></About>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;