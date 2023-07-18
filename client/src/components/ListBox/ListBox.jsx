import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import Button from '../UI/Button';
import { useCartContext } from '../../context/cartContext';

const ListBox = ( props ) => {
    const [ addedToCart, setAddedToCart ] = useState(false);
const form = useForm();
const { state, dispatch } = useCartContext();

const { register, handleSubmit, formState } = form;
const { errors } = formState;

const onAddToCart = (data) => {
    const formData = { 
        ...data,
        id: props.id, 
        name: props.name,
        brand: props.brand,
        price: props.price,
        images: props.images[0].img,
 };
    console.log(formData);

    if (!formData) {
        return;
    }
    
    dispatch({ type: 'ADD_TO_CART', payload: formData });
    setAddedToCart(true);
};

useEffect(() => {
    console.log(state);
}, [state]);


return (
    <form onSubmit={handleSubmit(onAddToCart)} className='ms-3 pb-3'>
                <div className='grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 w-full py-3'>
                    <div>
                    <select className='w-full text-xl p-1 rounded-xl ps-2 outline-none bg-blue-600 text-white' name="size" id="size" {...register('size', { required: true })}>
                        <option value="">Select Size</option>
                        <option value="7">7</option>
                        <option value="7.5">7.5</option>
                        <option value="8">8</option>
                        <option value="8.5">8.5</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="10.5">10.5</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="12.5">12.5</option>
                        <option value="13">13</option>
                    </select>
                    {errors.size && <span className="text-red-500">Please select a shoe size</span>}
                    </div>
                    <div>
                    <select className=' w-full text-xl p-1 rounded-xl ps-2 outline-none bg-blue-600 text-white' name="qty" id="qty" {...register('qty', { required: true })}>
                        <option value="">Qty</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                    {errors.size && <span className="text-red-500">Please select a Qty.</span>}
                    </div>
                <Button type="submit">Add To Cart</Button>
                </div>
                {addedToCart && <p className="transition-all duration-700 bg-green-500 text-white text-lg max-w-fit px-2 py-1 rounded-2xl tracking-wider">Added to cart!</p>}
            </form>
    )

}

export default ListBox;

