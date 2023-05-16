import { Menu, Transition } from '@headlessui/react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import Cart from '../../assets/images/cart.svg';
import Login from '../../assets/images/login.svg'

const Header = () => {
  return (
  <div className='flex p-6 bg-gray-900'>
    <div className='flex gap-2 items-center text-white'>   
    <div className=' flex text-5xl'><Link to='/'><span>KICKZ</span></Link></div>
      <Menu>
        {/* footwear */}
        <Menu.Button className='text-3xl ms-5 px-5 hover:text-blue-600'>MENS</Menu.Button>
        <Transition
            enter="transition duration-75 ease-out"
            enterFrom="origin-top opacity-0"
            enterTo=" origin-bottom opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="origin-bottom opacity-100"
            leaveTo="origin-top opacity-0"
       
      >
        <Menu.Items className='flex bg-slate-900 z-40'>
       <div className='grid grid-cols-2 justify-center absolute left-0 top-0 mt-20 pt-10 pl-28 z-50 bg-slate-900 w-full h-screen'>
        <div className='flex flex-col'>
        <h2 className='text-4xl pb-2' >Footwear</h2>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="mens/casual">
              Casual</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="mens/training">
              Training & Gym</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="mens/dress">
              Dress</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="mens/sandles">
              Sandles & Slides</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="mens/boots">
              Boots</Link>
          )}
        </Menu.Item>

        {/* accessories */}
        </div>

      <div className='flex flex-col'>
        <h2 className='text-4xl pb-2' >Accessories</h2>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="mens/socks">
              Socks</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="mens/shoecare">
              Shoe Care</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="mens/laces">
              Laces</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="mens/hats">
              Hats & Beanies</Link>
          )}
        </Menu.Item>
          </div>
      </div>
        </Menu.Items>
        </Transition>
      </Menu>

      <Menu>
        {/* footwear */}
        <Menu.Button className='text-3xl ms-5 px-5 hover:text-blue-600'>WOMENS</Menu.Button>
        <Transition
            enter="transition duration-75 ease-out"
            enterFrom="origin-top opacity-0"
            enterTo=" origin-bottom opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="origin-bottom opacity-100"
            leaveTo="origin-top opacity-0"
       
      >
        <Menu.Items className='flex bg-slate-900 z-40'>
       <div className='grid grid-cols-2 justify-center absolute left-0 top-0 mt-20 pt-10 pl-28 z-50 bg-slate-900 w-full h-screen'>
        <div className='flex flex-col'>
        <h2 className='text-4xl pb-2' >Footwear</h2>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="womens/casual">
              Casual</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="mens/training">
              Training & Gym</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="womens/dress">
              Dress</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="womens/sandles">
              Sandles & Slides</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="womens/boots">
              Boots</Link>
          )}
        </Menu.Item>

        {/* accessories */}
        </div>

      <div className='flex flex-col'>
        <h2 className='text-4xl pb-2' >Accessories</h2>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="womens/socks">
              Socks</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="womens/shoecare">
              Shoe Care</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="womens/laces">
              Laces</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="womens/hats">
              Hats & Beanies</Link>
          )}
        </Menu.Item>
          </div>
      </div>
        </Menu.Items>
        </Transition>
      </Menu>


      <Menu>
        {/* footwear */}
        <Menu.Button className='text-3xl ms-5 px-5 hover:text-blue-600'>UNISEX</Menu.Button>
        <Transition
            enter="transition duration-75 ease-out"
            enterFrom="origin-top opacity-0"
            enterTo=" origin-bottom opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="origin-bottom opacity-100"
            leaveTo="origin-top opacity-0"
       
      >
        <Menu.Items className='flex bg-slate-900 z-40'>
       <div className='grid grid-cols-2 justify-center absolute left-0 top-0 mt-20 pt-10 pl-28 z-50 bg-slate-900 w-full h-screen'>
        <div className='flex flex-col'>
        <h2 className='text-4xl pb-2' >Footwear</h2>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="unisex/casual">
              Casual</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="unisex/training">
              Training & Gym</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="unisex/dress">
              Dress</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="unisex/sandles">
              Sandles & Slides</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="unisex/boots">
              Boots</Link>
          )}
        </Menu.Item>

        {/* accessories */}
        </div>

      <div className='flex flex-col'>
        <h2 className='text-4xl pb-2' >Accessories</h2>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="unisex/socks">
              Socks</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="unisex/shoecare">
              Shoe Care</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="unisex/laces">
              Laces</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="unisex/hats">
              Hats & Beanies</Link>
          )}
        </Menu.Item>
          </div>
      </div>
        </Menu.Items>
        </Transition>
      </Menu>

      <Menu>
        {/* footwear */}
        <Menu.Button className='text-3xl ms-5 px-5 hover:text-blue-600'>SALE</Menu.Button>
        <Transition
            enter="transition duration-75 ease-out"
            enterFrom="origin-top opacity-0"
            enterTo=" origin-bottom opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="origin-bottom opacity-100"
            leaveTo="origin-top opacity-0"
       
      >
        <Menu.Items className='flex bg-slate-900 z-40'>
       <div className='grid grid-cols-2 justify-center absolute left-0 top-0 mt-20 pt-10 pl-28 z-50 bg-slate-900 w-full h-screen'>
        <div className='flex flex-col'>
        <h2 className='text-4xl pb-2' >Footwear</h2>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="sale/casual">
              Casual</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="sale/training">
              Training & Gym</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="sale/dress">
              Dress</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="sale/sandles">
              Sandles & Slides</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="sale/boots">
              Boots</Link>
          )}
        </Menu.Item>

        {/* accessories */}
        </div>

      <div className='flex flex-col'>
        <h2 className='text-4xl pb-2' >Accessories</h2>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="sale/socks">
              Socks</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="sale/shoecare">
              Shoe Care</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="sale/laces">
              Laces</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-2xl p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="sale/hats">
              Hats & Beanies</Link>
          )}
        </Menu.Item>
          </div>
      </div>
        </Menu.Items>
        </Transition>
      </Menu>
            {/* cart / login  */}
      <div className='flex gap-3 absolute right-5'>
        <Link to='cart'>
          <img className='w-8 ' src={Cart} alt="cart-icon" />
        </Link>
        <Link to='login'>
          <img className='w-8' src={Login} alt="login-icon" />
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Header;