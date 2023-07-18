import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SHOE_BY_ID } from "../utils/queries";
import ListBox from "../components/ListBox/ListBox";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Scrollbar } from 'swiper';

// images 
import visa from '../assets/images/visa.svg'; 
import amex from '../assets/images/amex.svg'; 
import mastercard from '../assets/images/mastercard.svg'; 
import paypal from '../assets/images/paypal.svg'; 
import afterpay from '../assets/images/afterpay.svg'; 


// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/autoplay';
import OrderFormDisclosure from "../components/Disclosure/OrderFormDisclosure";

const ShoeOverview = () => {
  const { id } = useParams();
  const [shoeData, setShoeData] = useState([]);

  const { loading, data } = useQuery(QUERY_SHOE_BY_ID, {
    variables: { shoeId: id },
  });

  useEffect(() => {
    if (data) {
      setShoeData(data.shoeById);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { _id, name, brand, price, description, images, specifications } = shoeData;

  return (
    <div>
      {!shoeData ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 items-center px-3 lg:grid-cols-2">
          <div className="flex p-4">
            {shoeData.images?.length > 0 ? (
              <Swiper
                modules={[Autoplay, Pagination, Scrollbar]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                {shoeData.images.map((image) => (
                  <SwiperSlide key={image.img}>
                    <img className="w-full" src={image.img} alt={name} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p>No image available</p>
            )}
          </div>
          <div className="lg:mx-auto w-full">
            <h2 className="text-4xl lg:text-5xl font-bold ms-3 my-3">{brand}</h2>
            <h3 className="text-3xl font-normal ms-3">{name}</h3>
            <h4 className="text-2xl font-bold ms-3 my-3">$ {price}</h4>
            <div className="m-5">
              <ListBox id={id} name={name} brand={brand} price={price} images={images} />
            </div>
            <div className="flex w-12 gap-3 ms-3 py-2">
              <img src={visa} alt="visa-card-icon" />
              <img src={mastercard} alt="mastercard-card-icon" />
              <img src={amex} alt="amex-card-icon" />
              <img src={paypal} alt="paypal-card-icon" />
              <img src={afterpay} alt="afterpay-card-icon" />
            </div>
            <div className="px-3 pb-3">
              <OrderFormDisclosure />
            </div>
          </div>
          <div className="lg: mx-auto">
            <div className="flex flex-col ms-3 py-3">
              <h3 className="text-4xl mx-auto lg:text-5xl font-bold py-4 lg:py-10">
                {name}
              </h3>
              <p className="text-xl w-full mx-auto px-5 py-2 tracking-wider leading-relaxed">
                {description}
              </p>
              <p className="italic text-lg w-full mx-auto px-5 py-2 tracking-wider leading-relaxed">{specifications}</p>
            </div>
          </div>
          <div className="lg:w-full object-cover p-3">
            {shoeData.images?.length > 0 ? (
              <img className="w-full" src={images[0].img} alt={name} />
            ) : (
              <p>No image available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
  
export default ShoeOverview;