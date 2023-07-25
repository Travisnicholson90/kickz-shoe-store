import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useWishList } from "../context/wishList";
import { useCartContext } from "../context/cartContext";
import classes from "./Cart.module.css";

const WishListModal = ({ isWishListModalOpen, closeWishListModal }) => {
  const { state, dispatch } = useWishList();
  const { dispatch: cartDispatch } = useCartContext();
  const { wishList } = state;

  const onAddToCart = (e) => {
    const id = e.target.value;
    // find the item id in the wishlist
    const item = wishList.find((item) => item.id === id);
    // add to cart
    cartDispatch({ type: "ADD_TO_CART", payload: item });
    // remove from wishlist
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: { id: id } });
  };

  const onRemoveWishList = (e) => {
    const id = e.target.value;
    // find the item id in the wishlist
    console.log(id);
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: { id: id } });
  };

  const onClearWishList = () => {
    dispatch({ type: "CLEAR_WISHLIST" });
  };

  return (
    <div>
      <Transition appear show={isWishListModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeWishListModal}>
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
                    WishList
                  </Dialog.Title>

                  <div className="mt-2 w-full md:w-4/5 lg::w-4/5">
                    {wishList.length > 0 ? (
                      wishList.map((item, index) => {
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
                              <button
                                value={item.id}
                                onClick={(e) => {
                                  onAddToCart(e), closeWishListModal();
                                }}
                                className="bg-blue-600 text-white px-2 py-1 rounded-2xl hover:cursor-pointer hover:bg-blue-500"
                              >
                                Add To Cart
                              </button>
                              <button
                                value={item.id}
                                onClick={(e) => onRemoveWishList(e)}
                                className="bg-red-500 text-white px-2 py-1 rounded-2xl hover:cursor-pointer hover:bg-red-400"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-red-500 font-bold text-xl">Wishlist is empty</p>
                    )}
                  </div>
                  <div className="flex gap-5 mt-4">
                    <button
                      type="button"
                      className="bg-blue-600 text-white px-2 py-1 rounded-2xl hover:cursor-pointer hover:bg-blue-500"
                      onClick={closeWishListModal}
                    >
                      Close
                    </button>
                    {wishList.length > 0 && (
                      <button
                        onClick={onClearWishList}
                        className="bg-red-500 text-white px-2 py-1 rounded-2xl hover:cursor-pointer hover:bg-red-400"
                      >
                        Clear Wishlist
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
export default WishListModal;
