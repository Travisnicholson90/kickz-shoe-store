import { useState, useEffect } from "react";
import { getShoeData } from "../db/firebase";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Autoplay, Pagination, Scrollbar } from 'swiper';
import Button from '../components/UI/Button';

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
    const { id } = useParams()
    const [ shoeData, setShoeData ] = useState([]);

    useEffect(() => {
        getShoeData().then((res) => setShoeData(res));
    }, []);
  
    if (!shoeData) {
        return <div>Loading...</div>;
      }

    // Find the shoe with the matching ID
    const selectedShoe = shoeData.find((shoe) => shoe.id.toString() === id);

    if (!selectedShoe) {
      return <div>Shoe not found!</div>;
    }
  
    const {Brand, Name, Overview, Description, Price,  img, img1, img2, img3, img4, img5, img6 } = selectedShoe;
  
    return (
  <div className='grid grid-cols-1 items-center px-3 lg:grid-cols-2'>
      <div className='flex p-4'>
        <Swiper className="mySwiper" 
            modules={[Pagination, Pagination, Scrollbar]}  
            spaceBetween={50}
            slidesPerView={1}
            pagination={true}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
        <SwiperSlide>
        <img className='object-cover' src={img} alt={Name} />
        </SwiperSlide>     
        <SwiperSlide>
        <img className='object-cover' src={img1} alt={Name} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='object-cover' src={img2} alt={Name} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='object-cover' src={img3} alt={Name} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='object-cover' src={img4} alt={Name} />
        </SwiperSlide>
        </Swiper>
      </div>
      <div className='lg:mx-auto w-full'>
        <h2 className="text-4xl font-bold ms-3 my-3">{Brand}</h2>
        <h3 className='text-3xl font-bold ms-3'>{Name}</h3>
        <h4 className='text-2xl font-bold ms-3 my-3'>${Price}</h4>
        <div>
            <form className='ms-3 pb-3' action="">
                <div className='flex flex-col py-3'>
                    <label className="text-lg font-bold pb-4" htmlFor="size">Size</label>
                    <div className='flex text-lg font-bold gap-2 py-3'>
                        <button className="flex items-center justify-center w-12 aspect-auto border border-stone-900" type="submit">38</button> 
                        <button className="flex items-center justify-center w-12 aspect-auto border border-stone-900" type="submit">39</button> 
                        <button className="flex items-center justify-center w-12 aspect-auto border border-stone-900" type="submit">40</button> 
                        <button className="flex items-center justify-center w-12 aspect-auto border border-stone-900" type="submit">41</button> 
                        <button className="flex items-center justify-center w-12 aspect-auto border border-stone-900" type="submit">42</button> 
                        <button className="flex items-center justify-center w-12 aspect-auto border border-stone-900" type="submit">43</button>
                        <button className="flex items-center justify-center w-12 aspect-auto border border-stone-900" type="submit">44</button> 
                        <button className="flex items-center justify-center w-12 aspect-auto border border-stone-900" type="submit">45</button>
                        <button className="flex items-center justify-center w-12 aspect-auto border border-stone-900" type="submit">46</button> 
                    </div>
                </div>
                <Button>Add To Cart</Button>
            </form>
        </div>
        <div className='flex w-12 gap-3 ms-3 py-2'>
        <img src={visa} alt="visa-card-icon" />
        <img src={mastercard} alt="mastercard-card-icon" />
        <img src={amex} alt="amex-card-icon" />
        <img src={paypal} alt="paypal-card-icon" />
        <img src={afterpay} alt="afterpay-card-icon" />
        </div>
       <div className='px-3 pb-3'>
        <OrderFormDisclosure />
       </div>
      </div>
        <div className="lg: mx-auto">   
            <div className="flex flex-col ms-3 py-3">
                <h3 className='text-4xl font-bold py-1'>{Name}</h3>
                <h3 className='text-2xl font-bold py-2'>{Overview}</h3>
                <p className='text-1xl py-2 max-w-md lg:max-w-lg'>{Description}</p>
            </div>
        </div>
        <div className="lg:w-full object-cover p-3">
            <img className="w-full" src={img} alt={Name} />
        </div>
    </div>
    );
  };
  
export default ShoeOverview;