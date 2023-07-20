import { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import Cart from '../../assets/images/cart.svg';
import heart from '../../assets/images/heart.svg';
import Auth from '../../utils/auth';
import MyModal from '../../pages/Cart';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // open model function
  const openModal = () => {
    setIsModalOpen(true);
  };
  // close modal function
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // logout the user
  const logoutHandler = () => { 
    Auth.logout()
  }

  return (
    <div className="flex p-6 bg-gray-900">
      <div className="flex gap-2 w-full items-center text-white">
        <div className=" flex text-5xl">
          <Link to="/">
            <span>KICKZ</span>
          </Link>
        </div>
        <Menu>
          {/* footwear */}
          <Menu.Button className="text-3xl ms-5 px-5 hover:text-blue-600">
            MENS
          </Menu.Button>
          <Transition
            enter="transition duration-75 ease-out"
            enterFrom="origin-top opacity-0"
            enterTo=" origin-bottom opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="origin-bottom opacity-100"
            leaveTo="origin-top opacity-0"
          >
            <Menu.Items className="flex bg-slate-900 z-40">
              <div className="grid grid-cols-2 justify-center absolute left-0 top-0 mt-20 pt-10 pl-28 z-50 bg-slate-900 w-full h-screen">
                <div className="flex flex-col">
                  <h2 className="text-4xl pb-2">Footwear</h2>
                  <Menu.Item className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="mens/casual"
                      >
                        Casual
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="mens/dress"
                      >
                        Dress
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link 
                        className={`${active && "text-blue-600"}`}
                        to="mens/training"
                      >
                        Training & Gym
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="mens/sandles"
                      >
                        Sandles & Slides
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="mens/boots"
                      >
                        Boots
                      </Link>
                    )}
                  </Menu.Item>

                  {/* accessories */}
                </div>

                <div className="flex flex-col">
                  <h2 className="text-4xl pb-2">Accessories</h2>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="mens/socks"
                      >
                        Socks
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="mens/shoecare"
                      >
                        Shoe Care
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="mens/laces"
                      >
                        Laces
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="mens/hats"
                      >
                        Hats & Beanies
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Menu>
          {/* footwear */}
          <Menu.Button className="text-3xl ms-5 px-5 hover:text-blue-600">
            WOMENS
          </Menu.Button>
          <Transition
            enter="transition duration-75 ease-out"
            enterFrom="origin-top opacity-0"
            enterTo=" origin-bottom opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="origin-bottom opacity-100"
            leaveTo="origin-top opacity-0"
          >
            <Menu.Items className="flex bg-slate-900 z-40">
              <div className="grid grid-cols-2 justify-center absolute left-0 top-0 mt-20 pt-10 pl-28 z-50 bg-slate-900 w-full h-screen">
                <div className="flex flex-col">
                  <h2 className="text-4xl pb-2">Footwear</h2>
                  <Menu.Item className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="womens/casual"
                      >
                        Casual
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="womens/dress"
                      >
                        Dress
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="mens/training"
                      >
                        Training & Gym
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="womens/sandles"
                      >
                        Sandles & Slides
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="womens/boots"
                      >
                        Boots
                      </Link>
                    )}
                  </Menu.Item>

                  {/* accessories */}
                </div>

                <div className="flex flex-col">
                  <h2 className="text-4xl pb-2">Accessories</h2>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="womens/socks"
                      >
                        Socks
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="womens/shoecare"
                      >
                        Shoe Care
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="womens/laces"
                      >
                        Laces
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="womens/hats"
                      >
                        Hats & Beanies
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Menu>
          {/* footwear */}
          <Menu.Button className="text-3xl ms-5 px-5 hover:text-blue-600">
            UNISEX
          </Menu.Button>
          <Transition
            enter="transition duration-75 ease-out"
            enterFrom="origin-top opacity-0"
            enterTo=" origin-bottom opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="origin-bottom opacity-100"
            leaveTo="origin-top opacity-0"
          >
            <Menu.Items className="flex bg-slate-900 z-40">
              <div className="grid grid-cols-2 justify-center absolute left-0 top-0 mt-20 pt-10 pl-28 z-50 bg-slate-900 w-full h-screen">
                <div className="flex flex-col">
                  <h2 className="text-4xl pb-2">Footwear</h2>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="unisex/casual"
                      >
                        Casual
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="unisex/training"
                      >
                        Training & Gym
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="unisex/dress"
                      >
                        Dress
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="unisex/sandles"
                      >
                        Sandles & Slides
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="unisex/boots"
                      >
                        Boots
                      </Link>
                    )}
                  </Menu.Item>

                  {/* accessories */}
                </div>

                <div className="flex flex-col">
                  <h2 className="text-4xl pb-2">Accessories</h2>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="unisex/socks"
                      >
                        Socks
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="unisex/shoecare"
                      >
                        Shoe Care
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="unisex/laces"
                      >
                        Laces
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="unisex/hats"
                      >
                        Hats & Beanies
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Menu>
          {/* footwear */}
          <Menu.Button className="text-3xl ms-5 px-5 hover:text-blue-600">
            SALE
          </Menu.Button>
          <Transition
            enter="transition duration-75 ease-out"
            enterFrom="origin-top opacity-0"
            enterTo=" origin-bottom opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="origin-bottom opacity-100"
            leaveTo="origin-top opacity-0"
          >
            <Menu.Items className="flex bg-slate-900 z-40">
              <div className="grid grid-cols-2 justify-center absolute left-0 top-0 mt-20 pt-10 pl-28 z-50 bg-slate-900 w-full h-screen">
                <div className="flex flex-col">
                  <h2 className="text-4xl pb-2">Footwear</h2>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="sale/casual"
                      >
                        Casual
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="sale/training"
                      >
                        Training & Gym
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="sale/dress"
                      >
                        Dress
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="sale/sandles"
                      >
                        Sandles & Slides
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="sale/boots"
                      >
                        Boots
                      </Link>
                    )}
                  </Menu.Item>

                  {/* accessories */}
                </div>

                <div className="flex flex-col">
                  <h2 className="text-4xl pb-2">Accessories</h2>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="sale/socks"
                      >
                        Socks
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="sale/shoecare"
                      >
                        Shoe Care
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="sale/laces"
                      >
                        Laces
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled className="text-2xl p-1">
                    {({ active }) => (
                      <Link
                        className={`${active && "text-blue-600"}`}
                        to="sale/hats"
                      >
                        Hats & Beanies
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* cart / login  */}
        <div className="flex gap-8 items-center ml-auto">
          <Link to='wishlist'>
          <img className='w-8 hover:scale-125 hover:cursor-pointer transition-all duration-300' src={heart} alt="heart-icon" />
          </Link>
            <img onClick={openModal} className='w-8 hover:scale-125 hover:cursor-pointer transition-all duration-300' src={Cart} alt="cart-icon" />
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
      {isModalOpen && <MyModal isOpen={isModalOpen} closeModal={closeModal} />}
    </div>
  );
}

export default Header;