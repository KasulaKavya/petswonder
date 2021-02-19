import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/core/Home'
import Menu from './components/core/Menu'
import Signin from './components/user/Signin'
import Signup from './components/user/Signup'
import Footer from './components/core/Footer'
import Shopping from './components/shopping/Shopping'
import ParticularProduct from './components/core/ParticularProduct'
import Category from './components/category/Category'
import Cart from './components/cart/Cart'
import Search from './components/core/Search'
import Pet from './components/category/Pet'
import PopularProductPage from './components/shopping/PopularProductPage'
import PayByRazorPay from './components/core/PayByRazorPay'
import Profile from './components/core/Profile'
import CreateProfile from './components/core/CreateProfile'
import EditProfile from './components/core/EditProfile'
import PrivateRoute from './components/auth/PrivateRoute'
import Address from './components/core/Address'
import Payment from './components/core/Payment'
import PetServices from './components/petServices/PetServices'
import PetGuide from './components/petServices/PetGuide'
import Brand from './components/category/Brand'
import petMate from './components/petServices/petMate'

const App = () => {
  return (
    <Router>
      <Menu />
      <br/>
        <br/>
        <br className="d-none d-xl-block"/>
        <br className="d-none d-lg-block d-xl-none"/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <PrivateRoute  exact path="/shopping" component={Shopping} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute  exact path="/product/:productId" component={ParticularProduct} />
        <PrivateRoute  exact path="/pet/:pet/category/:name" component={Category} />
        <PrivateRoute exact path="/pet/:pet" component={Pet} />
        <PrivateRoute exact path="/brand/:name" component={Brand} />
        <PrivateRoute exact path="/cart" component={Cart} />
        <PrivateRoute exact path="/popularProducts" component={PopularProductPage} />
        <PrivateRoute exact path="/search" component={Search} />
        <PrivateRoute exact path="/payByRazorPay" component={PayByRazorPay} />
        <PrivateRoute exact path="/createProfile" component={CreateProfile} />
        <PrivateRoute exact path="/editProfile" component={EditProfile} />
        <PrivateRoute exact path="/setaddress" component={Address} />
        <PrivateRoute exact path="/payment" component={Payment} />
        <PrivateRoute exact path="/petServices" component={PetServices} />
        <PrivateRoute exact path="/petGuide" component={PetGuide} />
        <PrivateRoute exact path="/petMate" component={petMate} />
      </Switch>
      <Footer />
      
    </Router>
  )
}

export default App

