import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom'

// pages
import GoogleAuth from './pages/Google.Auth'
import Checkout from './pages/Checkout.page'
import HomePage from './pages/Home.Page'
import Restaurant from './pages/Restaurant.page'
import OrdersOnline from './components/Restaurant/OrderOnline'
import Menu from './components/Restaurant/Menu'
import Photo from './components/Restaurant/Photo'
import Reviews from './components/Restaurant/Review'
import Overview from './components/Restaurant/Overview'

function App() {
  return <>
  <Routes>
    <Route path='/' element={<Navigate to='/delivery' />} />
    <Route path='/:type' element={<HomePage/>} />
    <Route path='/google/:token' element={<GoogleAuth/>} />
    {/* <Route path='/restaurant/:id' element={<RedirectRestaurant/>} /> */}
    <Route path='/restaurant/:id' element={<Restaurant />} >
      <Route path='overview' element={<Overview/>} />
      <Route path='order-online' element={<OrdersOnline/>} />
      <Route path='review' element={<Reviews/>} />
      <Route path='menu' element={<Menu/>} />
      <Route path='photos' element={<Photo/>} />
    </Route>
    <Route path='/checkout/orders' element={<Checkout/>} />
  
  
  </Routes>
  </>
}

export default App;
