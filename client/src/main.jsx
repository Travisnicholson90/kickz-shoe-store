import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/authContext.jsx'
import { WishListContextProvider } from './context/wishList.jsx';
import { CartContextProvider } from './context/cartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <WishListContextProvider>
          <App />
        </WishListContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
