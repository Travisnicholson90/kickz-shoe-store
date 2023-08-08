import { PaymentElement } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useCartContext } from '../context/cartContext';
import './checkoutForm.css';

const CheckoutForm = () => {
  const { state } = useCartContext();
  const { cart } = state;
  const [ cartData, setCartData ] = useState([]);
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  useEffect(() => {
    const getCart = async () => {
        const response = await fetch("http://localhost:3001/checkout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
       setCartData(data);
    };
    getCart();
    }, []);


const cartArray = Object.values(cart);
const calculateTotal = (cart) => {
  return cart.reduce((total, item) => total + item.price, 0);
};

const totalCost = calculateTotal(cart);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-2 lg:p-5">
  <div className="mt-2 w-full md:w-4/5 lg::w-4/5">
  {cartArray.length > 0 ? (
    cartArray.map((item, index) => {
      return (
        <div
          className="w-full gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-start justify-between my-5"
          key={`${item.id}-${index}`}
        >
          <div>
            <img className="shadow-xl"
              src={item.images}
              alt={item.name}
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="font-bold text-2xl">{item.brand}</p>
            <p>{item.name}</p>
            <p className="font-bold">${item.price}</p>
          </div>
        </div>
      );
    })
  ) : (
    <p>Cart is empty</p>
  )}
  <p className="font-bold text-2xl">Total: <span className="font-normal">${totalCost}</span></p>
</div>

    <form className="h-fit" id="payment-form" onSubmit={handleSubmit}>
      <p>4242 4242 4242 4242</p>
      <p>MM/YY: 04/24</p>
      <p>CVC: 424</p>
      <PaymentElement id="payment-element" />
      <button className="bg-blue-500 px-3 py-2 rounded-2xl text-white" disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
    </div>
  );
}

export default CheckoutForm;