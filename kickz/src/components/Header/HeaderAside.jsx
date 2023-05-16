import { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import classes from './HeaderAside.module.css';
import Cart from '../../assets/images/cart.svg';
import Login from '../../assets/images/login.svg';
import toggle from '../../assets/images/hamburger.svg';

const HeaderAside = () => {
const [showNavbar, setShowNavbar] = useState(false);

    const navbarHandler = () => {
        setShowNavbar(prevState => !prevState);
    }

    return (
    <div className='flex bg-slate-900 py-3'>
    <div className='flex'>
        {/* toggle */}
        <div className=' relative z-50 w-full flex items-center px-3'>
          <div className='z-50'>
            <img onClick={navbarHandler} className='w-10' src={toggle} alt="nav-menu-toggle" /> 
          </div>
          <div className='text-white ml-20 text-3xl'>KICKZ</div>
        </div>
        {/* navbar */}

        { showNavbar && <div className='absolute flex flex-col gap-3 items-start pt-20 px-1 h-screen w-full bg-gray-900 text-white z-30'>
            <Menu>
        {/* footwear */}
        <Menu.Button className='text-2xl ms-5 px-3 hover:text-blue-600'>MENS</Menu.Button>
        <Transition
            enter="transition duration-75 ease-out"
            enterFrom="origin-top opacity-0"
            enterTo=" origin-bottom opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="origin-bottom opacity-100"
            leaveTo="origin-top opacity-0"
       
      >
        <Menu.Items className='flex'>
        <div className='flex flex-col absolute ml-48 top-20'>
        <h2 className='text-2xl pb-2'>Footwear</h2>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="/causal">
              Casual</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="/training">
              Training & Gym</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="/dress">
              Dress</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="/sandles">
              Sandles & Slides</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="/boots">
              Boots</Link>
          )}
        </Menu.Item>

        <div className='flex flex-col py-5'>
        {/* accessories */}
        <h2 className='text-2xl pb-2' >Accessories</h2>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="/socks">
              Socks</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="/shoecare">
              Shoe Care</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="/laces">
              Laces</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="/hats">
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
        <Menu.Button className='text-2xl ms-5 px-3 hover:text-blue-600'>WOMENS</Menu.Button>
        <Transition
            enter="transition duration-75 ease-out"
            enterFrom="origin-top opacity-0"
            enterTo=" origin-bottom opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="origin-bottom opacity-100"
            leaveTo="origin-top opacity-0"
       
      >
        <Menu.Items className='flex'>
        <div className='flex flex-col absolute ml-48 top-20'>
        <h2 className='text-2xl pb-2'>Footwear</h2>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="womens/causal">
              Casual</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="womens/training">
              Training & Gym</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="womens/dress">
              Dress</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="womens/sandles">
              Sandles & Slides</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="womens/boots">
              Boots</Link>
          )}
        </Menu.Item>

        <div className='flex flex-col py-5'>
        {/* accessories */}
        <h2 className='text-2xl pb-2' >Accessories</h2>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="womens/socks">
              Socks</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="womens/shoecare">
              Shoe Care</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="womens/laces">
              Laces</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
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
        <Menu.Button className='text-2xl ms-5 px-3 hover:text-blue-600'>UNISEX</Menu.Button>
        <Transition
            enter="transition duration-75 ease-out"
            enterFrom="origin-top opacity-0"
            enterTo=" origin-bottom opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="origin-bottom opacity-100"
            leaveTo="origin-top opacity-0"
       
      >
        <Menu.Items className='flex'>
        <div className='flex flex-col absolute ml-48 top-20'>
        <h2 className='text-2xl pb-2'>Footwear</h2>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="unisex/causal">
              Casual</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="unisex/training">
              Training & Gym</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="unisex/dress">
              Dress</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="unisex/sandles">
              Sandles & Slides</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="unisex/boots">
              Boots</Link>
          )}
        </Menu.Item>

        <div className='flex flex-col py-5'>
        {/* accessories */}
        <h2 className='text-2xl pb-2' >Accessories</h2>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="unisex/socks">
              Socks</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="unisex/shoecare">
              Shoe Care</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="unisex/laces">
              Laces</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
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
        <Menu.Button className='text-2xl ms-5 px-3 hover:text-blue-600'>SALE</Menu.Button>
        <Transition
            enter="transition duration-75 ease-out"
            enterFrom="origin-top opacity-0"
            enterTo=" origin-bottom opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="origin-bottom opacity-100"
            leaveTo="origin-top opacity-0"
       
      >
        <Menu.Items className='flex'>
        <div className='flex flex-col absolute ml-48 top-20'>
        <h2 className='text-2xl pb-2'>Footwear</h2>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="sale/causal">
              Casual</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="sale/training">
              Training & Gym</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="sale/dress">
              Dress</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="sale/sandles">
              Sandles & Slides</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="sale/boots">
              Boots</Link>
          )}
        </Menu.Item>

        <div className='flex flex-col py-5'>
        {/* accessories */}
        <h2 className='text-2xl pb-2' >Accessories</h2>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="sale/socks">
              Socks</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="sale/shoecare">
              Shoe Care</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="sale/laces">
              Laces</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
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

        </div> 
        }
    </div>
    </div> 
    )

}
export default HeaderAside;