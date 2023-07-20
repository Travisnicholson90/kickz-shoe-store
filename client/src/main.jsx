import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WishListContextProvider } from './context/wishList.jsx';
import { CartContextProvider } from './context/cartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CartContextProvider>
        <WishListContextProvider>
          <App />
        </WishListContextProvider>
      </CartContextProvider>
  </React.StrictMode>
)
