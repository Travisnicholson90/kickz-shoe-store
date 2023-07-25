import "./Heart.css";
import { useWishList } from "../../../context/wishList";
import heart from "../../../assets/images/heart.svg";

const Heart = (props) => {
  const { state, dispatch } = useWishList();

  const handleOnClicked = () => {
    const shoeData = {
      id: props.id,
      name: props.name,
      brand: props.brand,
      price: props.price,
      images: props.images[0].img,
    };
    console.log(shoeData);

    if (!shoeData) {
      return;
    }

    dispatch({ type: "ADD_TO_WISHLIST", payload: shoeData });
  };

  return (
        <img
          onClick={handleOnClicked}
          src={heart}
          alt="heart"
          className="w-10 transition-all duration-300 hover:cursor-pointer hover:scale-125"
        />
  );
};

export default Heart;
