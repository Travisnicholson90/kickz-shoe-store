import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import classes from "./Cart.module.css";
import { loadStripe } from "@stripe/stripe-js";
import { CHECKOUT } from "../utils/queries";
import { useQuery, useLazyQuery } from "@apollo/client";

//  stripe promise is the connection to the stripe api key
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


export default function MyModal({ isOpen, closeModal }) {
  const [ isCheckingOut, setIsCheckingOut ] = useState(false)
  const { state, dispatch } = useCartContext();
  const { cart } = state;

  const [getCheckout, { data }] = useLazyQuery(CHECKOUT)

  const onRemoveFromCart = (e) => {
    const id = e.target.value
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: id} });
  };

  const onClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const handleCheckout = async () => {
    setIsCheckingOut(true)
    const cartItemIds = cart.map(item => item.id)

    try {
      const { data } = await getCheckout({
        query: CHECKOUT,
        variables: { shoes: cartItemIds }
      })
           
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.checkout.sessionId,
      });

      if (error) {
        console.log('Error redirecting to stripe checkout', error)
      }
    } catch (error) {
      console.log('Error checking out', error)
    } finally {
      setIsCheckingOut(false)
    }
  }

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-scroll">
            <div className="flex mt-20  min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full flex flex-col transform overflow-hidden rounded-2xl bg-white p-2 py-5 items-center text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl justify-self-start leading-6 text-gray-900 font-bold"
                  >
                    {" "}
                    Cart
                  </Dialog.Title>

                  <div className="mt-2 w-full md:w-4/5 lg::w-4/5">
                    {cart.length > 0 ? (
                      cart.map((item, index) => {
                        return (
                          <div
                            className="w-full gap-5  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-start  justify-between my-5"
                            key={`${item.id}-${index}`}
                          >
                            <div>
                              <img
                                className={classes.img}
                                src={item.images}
                                alt={item.name}
                              />
                            </div>
                            <div className="flex flex-col items-start">
                              <p>{item.name}</p>
                              <p>{item.brand}</p>
                              <p>${item.price}</p>
                            </div>
                            <div className="flex gap-5 items-start">
                              <Link to={`checkout/${item.id}`}>
                              <button onClick={() => closeModal()}  className="bg-blue-600 text-white px-2 py-1 rounded-2xl hover:cursor-pointer hover:bg-blue-500">Checkout</button>
                              </Link>
                              <button value={item.id} onClick={onRemoveFromCart} className="bg-red-500 text-white px-2 py-1 rounded-2xl hover:cursor-pointer hover:bg-red-400">Delete</button>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p>Cart is empty</p>
                    )}
                  </div>
                  <div className="flex gap-5 mt-4">
                    <button
                      type="button"
                      className="bg-blue-600 text-white px-2 py-1 rounded-2xl hover:cursor-pointer hover:bg-blue-500"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    {cart.length > 0 && <button onClick={onClearCart} className="bg-red-500 text-white px-2 py-1 rounded-2xl hover:cursor-pointer hover:bg-red-400">Clear Cart</button>}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
