import { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import classes from './Header.module.css';
import Cart from '../../assets/images/cart.svg';
import heart from '../../assets/images/heart.svg';
import MyModal from '../../pages/Cart';
import WishListModal from '../../pages/Wishlist';

const HeaderAside = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWishListModalOpen, setIsWishListModalOpen] = useState(false);


  // open model function
  const openModal = () => {
    setIsModalOpen(true);
  };
  const openWishListModal = () => {
    setIsWishListModalOpen(true);
  };
  // close modal function
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeWishListModal = () => {
    setIsWishListModalOpen(false);
  };

  // logout the user
  const logoutHandler = () => { 
    Auth.logout();
  }

  const navbarHandler = () => {
     setShowNavbar(prevState => !prevState);
  }

    return (
    <div className='flex bg-slate-900 py-3'>
    <div className='flex w-full'>
        <div className='relative z-50 w-full flex items-center justify-between px-3'>
          <div onClick={navbarHandler} className='z-50'>
          <input id={classes.checkbox2} type='checkbox' />
            <label className={`${classes.toggle} ${classes.toggle2} w-12`} id={classes.checkbox}>
            <div id={classes.bar4} className={classes.bars}></div>
            <div id={classes.bar5} className={classes.bars}></div>
            <div id={classes.bar6} className={classes.bars}></div>
            </label> 
          </div>
          <div className='text-white text-3xl ml-10'>KICKZ</div>
          <div className='flex ml-auto gap-2'>           
          <img onClick={openWishListModal} className='w-8 hover:scale-125 hover:cursor-pointer transition-all duration-300' src={heart} alt="heart-icon" />
          <img onClick={openModal} className='w-8 ml-auto hover:scale-125 hover:cursor-pointer transition-all duration-300' src={Cart} alt="cart-icon" />
          </div>
        </div>
        {/* navbar */}

        { showNavbar && 
        <div className='absolute flex flex-col gap-3 items-start pt-20 px-1 h-screen w-full bg-gray-900 text-white z-30'>
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
            to="mens/casual">
              Casual</Link>
          )}
        </Menu.Item>
        <Menu.Item className='text-md p-1'>
          {({ active }) => (
            <Link className={`${active && 'text-blue-600' }`}
            to="mens/dress">
              Dress</Link>
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
      <div className="flex gap-8 items-center mt-60 ml-10">
          {!Auth.loggedIn() && (
            <Link to="login">
              <button className={classes.Btn}>
                <div className={classes.sign}>
                  <svg className={classes.svg} viewBox="0 0 512 512">
                    <path
                      className={classes.path}
                      d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                      ></path>
                  </svg>
                </div>
                <div className={classes.text}>Login</div>
              </button>
            </Link>
          )}
          {Auth.loggedIn() && (
            <Link to="logout">
              <button onClick={logoutHandler} className={classes.Btn}>
                <div className={classes.sign}>
                  <svg className={classes.svg} viewBox="0 0 512 512">
                    <path
                      className={classes.path}
                      d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                      ></path>
                  </svg>
                </div>
                <div className={classes.text}>Logout</div>
              </button>
            </Link>
          )}
        </div>
          </div> 
          }
    </div>
      {isModalOpen && <MyModal isOpen={isModalOpen} closeModal={closeModal} />}
      {isWishListModalOpen && (
          <WishListModal
            isWishListModalOpen={isWishListModalOpen}
            closeWishListModal={closeWishListModal}
          />
        )}
    </div> 
    )
    
}
export default HeaderAside;