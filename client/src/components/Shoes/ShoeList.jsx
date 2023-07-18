// ShoeList.js
import Button from "../UI/Button";
import InfiniteScroll from "react-infinite-scroll-component";
import classes from "./ShoeList.module.css";
import { Link } from "react-router-dom";

const ShoeList = ({ data, renderedData, fetchMoreData }) => {

  return (
    <InfiniteScroll
      dataLength={renderedData}
      next={fetchMoreData}
      hasMore={data.length > renderedData}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {data.slice(0, renderedData).map((shoe) => (
          <div className={`flex flex-col w-full gap-2`} key={shoe._id}>
            <img className={`${classes.img}`} src={shoe.images[0].img} alt={shoe.name} />
            <div className="flex items-center justify-between gap-5">
              <div className="flex flex-col flex-wrap">
                <h2 className="font-bold text-xl">{shoe.brand}</h2>
                <h3>{shoe.name}</h3>
                <p className="font-bold">$ {shoe.price}</p>
              </div>
              <div className="flex justify-end">
                <Link to={`shoe/${shoe._id}`}>
                <Button>Buy Now</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default ShoeList;
