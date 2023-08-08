import { useCartContext } from "../context/cartContext"
import { useState, useEffect } from "react";
import classes from './completion.module.css'

export default function Completion() {
  const { state } = useCartContext();
  const { cart } = state;
  const [ cartData, setCartData ] = useState([]);

  useEffect(() => {
    setCartData(cart)
  }, [cart])

  return (
    <div className="grid p-5">
      <h2 className="text-3xl">Thank you for shopping at Kickz !</h2>
      <h3 className="text-2xl py-5">Your order summary</h3>
    {cartData.map((item) => {
      return (
        <div className="flex items-center gap-5 p-2" key={item.id}>
          <div>
            <img className={`shadow-2xl ${classes.image}`} src={item.images} alt={item.name} />
          </div>
          <div>
          <h2 className="font-bold">{item.brand}</h2>
          <h3>{item.name}</h3>
          <p className="font-bold">{item.price}</p>
          </div>
        </div>
      )})}
      <h3 className="font-bold pt-5">Shipping</h3>
      <p>You will receive an email notification shortly regarding shipping information</p>
    </div>
  )
}
