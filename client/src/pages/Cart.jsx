import { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import classes from "./Cart.module.css";
import Auth from '../utils/auth'
import { useMutation } from '@apollo/client';
import { ADD_CART_TO_USER } from '../utils/mutations';

export default function MyModal({ isOpen, closeModal }) {
  const [ userId, setUserId ] = useState('');
  const { state, dispatch } = useCartContext();
  const { cart } = state;

  useEffect(() => {
  const profile = Auth.getProfile();
  setUserId(profile.id)
  }, []);

  const [addCartToUser] = useMutation(ADD_CART_TO_USER);
  
  const onAddCartToUser = async () => {
    
    const userCart = {
      name: 'Club C Revenge Shoes',
      brand: 'Reebok',
      price: 160,
      quantity: "1",
      size: "10",
    }

    try {
      const { data } = await addCartToUser({
        variables: { userId: userId, cart: userCart },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const onRemoveFromCart = (e) => {
    const id = e.target.value
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: id} });
  };

  const onClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  useEffect(() => {
    console.log(cart);
  }, []);
  
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
                    <Link to={`/payments`}>
                      <button onClick={() => {onAddCartToUser(); closeModal()}}  className="bg-blue-600 text-white px-2 py-1 rounded-2xl hover:cursor-pointer hover:bg-blue-500">Checkout</button>
                    </Link>
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
