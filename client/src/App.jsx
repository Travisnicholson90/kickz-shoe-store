import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import pages
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/Home';
import SalePage from './pages/Sale';
import CartPage from './pages/Cart';
import WishListPage from './pages/Wishlist';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
// mens pages
import MensCasual from './pages/Mens/Casual';
import MensTraining from './pages/Mens/Training';
import MensDress from './pages/Mens/Dress';
import MensSandles from './pages/Mens/Sandles';
import MensBoots from './pages/Mens/Boots';
import MensSocks from './pages/Mens/Socks';
import MensShoeCare from './pages/Mens/ShoeCare';
import MensLaces from './pages/Mens/Laces';
import MensHats from './pages/Mens/Hats';
// womens pages
import WomensCasual from './pages/Womens/Casual';
import WomensTraining from './pages/Womens/Training';
import WomensDress from './pages/Womens/Dress';
import WomensSandles from './pages/Womens/Sandles';
import WomensBoots from './pages/Womens/Boots';
import WomensSocks from './pages/Womens/Socks';
import WomensShoeCare from './pages/Womens/ShoeCare';
import WomensLaces from './pages/Womens/Laces';
import WomensHats from './pages/Womens/Hats';
// unisex pages
import UnisexCasual from './pages/Unisex/Casual';
import UnisexTraining from './pages/Unisex/Training';
import UnisexDress from './pages/Unisex/Dress';
import UnisexSandles from './pages/Unisex/Sandles';
import UnisexBoots from './pages/Unisex/Boots';
import UnisexSocks from './pages/Unisex/Socks';
import UnisexShoeCare from './pages/Unisex/ShoeCare';
import UnisexLaces from './pages/Unisex/Laces';
import UnisexHats from './pages/Unisex/Hats';
// sale pages
import SaleCasual from './pages/Sale/Casual';
import SaleTraining from './pages/Sale/Training';
import SaleDress from './pages/Sale/Dress';
import SaleSandles from './pages/Sale/Sandles';
import SaleBoots from './pages/Sale/Boots';
import SaleSocks from './pages/Sale/Socks';
import SaleShoeCare from './pages/Sale/ShoeCare';
import SaleLaces from './pages/Sale/Laces';
import SaleHats from './pages/Sale/Hats';
// shoe overview page
import ShoeOverview from './pages/ShoeOverview';
import Checkout from './pages/Checkout';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <RootLayout /> }>
      <Route index element={<HomePage />} />
      {/* mens product routes */}
      <Route path='/mens'>
      <Route path='casual' element={ <MensCasual />} />
      <Route path='training' element={ <MensTraining />} />
      <Route path='dress' element={ <MensDress />} />
      <Route path='sandles' element={ <MensSandles />} />
      <Route path='boots' element={ <MensBoots /> } />
      <Route path='socks' element={ <MensSocks />} />
      <Route path='shoecare' element={ <MensShoeCare />} />
      <Route path='laces' element={ <MensLaces />} />
      <Route path='hats' element={ <MensHats />} />
      </Route>
      {/* womens product routes */}
      <Route path ='/womens'>
      <Route path='casual' element={ <WomensCasual />} />
      <Route path='training' element={ <WomensTraining />} />
      <Route path='dress' element={ <WomensDress />} />
      <Route path='sandles' element={ <WomensSandles />} />
      <Route path='boots' element={ <WomensBoots /> } />
      <Route path='socks' element={ <WomensSocks />} />
      <Route path='shoecare' element={ <WomensShoeCare />} />
      <Route path='laces' element={ <WomensLaces />} />
      <Route path='hats' element={ <WomensHats />} />
      </Route>
      {/* unisex product routes */}
      <Route path='/unisex'>
      <Route path='casual' element={ <UnisexCasual />} />
      <Route path='training' element={ <UnisexTraining />} />
      <Route path='dress' element={ <UnisexDress />} />
      <Route path='sandles' element={ <UnisexSandles />} />
      <Route path='boots' element={ <UnisexBoots /> } />
      <Route path='socks' element={ <UnisexSocks />} />
      <Route path='shoecare' element={ <UnisexShoeCare />} />
      <Route path='laces' element={ <UnisexLaces />} />
      <Route path='hats' element={ <UnisexHats />} />
      </Route>
      {/* sale product routes */}
      <Route path='/sale'>
      <Route path='casual' element={ <SaleCasual />} />
      <Route path='training' element={ <SaleTraining />} />
      <Route path='dress' element={ <SaleDress />} />
      <Route path='sandles' element={ <SaleSandles />} />
      <Route path='boots' element={ <SaleBoots /> } />
      <Route path='socks' element={ <SaleSocks />} />
      <Route path='shoecare' element={ <SaleShoeCare />} />
      <Route path='laces' element={ <SaleLaces />} />
      <Route path='hats' element={ <SaleHats />} />
      </Route>
      <Route path='shoe/:id' element={ <ShoeOverview /> } />
      <Route path='mens/dress/shoe/:id' element={ <ShoeOverview /> } />
      <Route path='mens/casual/shoe/:id' element={ <ShoeOverview /> } />
      <Route path='womens/casual/shoe/:id' element={ <ShoeOverview /> } />
      <Route path='sale' element={ <SalePage /> } />
      <Route path='cart' element={ <CartPage /> } />
      <Route path='checkout/:id' element={ <Checkout /> } /> 
      <Route path='wishlist' element={ <WishListPage /> } />
      <Route path='login' element={ <LoginPage /> } />
      <Route path='signup' element={ <SignupPage /> } />
    </Route>
  )
)

function App() {

  return (
    <ApolloProvider client={client}>
    <RouterProvider router={router} />
    </ApolloProvider>
  )
}

export default App
