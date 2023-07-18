import { Fragment } from "react";
import Carousel from "../components/Carousel/Carousel";
import SaleShoes from "../components/onSale/OnSale";
import FeaturedBrand from "../components/FeaturedBrand/FeaturedBrand";

const HomePage = () => {

    return (
        <Fragment>
            <Carousel />
            <SaleShoes />
            <FeaturedBrand />
        </Fragment>
    )
}

export default HomePage;