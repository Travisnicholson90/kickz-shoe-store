import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SHOE_BY_PRICE } from "../../utils/queries";
import { Link } from "react-router-dom";
import classes from "./OnSale.module.css";

const SaleShoes = () => {
  const [shoes, setShoes] = useState([]);
  const { loading, data } = useQuery(QUERY_SHOE_BY_PRICE, {
    variables: { maxPrice: 150.0 },
  });

  useEffect(() => {
    if (data && data.searchShoeByPrice) {
      setShoes(data.searchShoeByPrice);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>On Sale This Month</h1>
      <div className={classes["card-container"]}>
        {shoes.map((shoe) => (
          <div className={`${classes.card} relative`} key={shoe._id}>
            <img
              className={`${classes.img}`}
              src={shoe.images[0].img}
              alt={shoe.name}
            />
            <h2 className={classes.brand}>{shoe.brand}</h2>
            <h3 className={classes.name}>{shoe.name}</h3>
            <h4 className={classes.price}>$ {shoe.price}</h4>
            <Link to={`shoe/${shoe._id}`}>
              <button className="mt-3 bg-blue-500 px-2 py-1 text-white rounded-2xl">
                Show More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SaleShoes;
