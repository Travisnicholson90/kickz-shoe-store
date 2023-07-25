import { useState, useEffect } from "react";
import classes from "../onSale/OnSale.module.css";
import { useQuery } from "@apollo/client";
import { QUERY_SHOE_BY_BRAND } from "../../utils/queries";
import { Link } from "react-router-dom";

const FeaturedBrand = () => {
  const [shoes, setShoes] = useState([]);

  const { loading, data } = useQuery(QUERY_SHOE_BY_BRAND, {
    variables: { brand: "Reebok" },
  });

  useEffect(() => {
    if (data && data.searchShoeByBrand) {
      setShoes(data.searchShoeByBrand);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Shop Reebok</h1>
      <div className={classes["card-container"]}>
        {shoes.map((shoe) => (
          <div className={`${classes.card}`} key={shoe._id}>
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

export default FeaturedBrand;
