import { Fragment } from "react";
import Carousel from "../components/Carousel/Carousel";
import SaleShoes from "../components/onSale/OnSale";
import Trending from "../components/trending/Trending";

const HomePage = () => {
    return (
        <Fragment>
            <Carousel />
            <SaleShoes />
            <Trending />
        </Fragment>
    )
}

export default HomePage;