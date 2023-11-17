import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/shared/footer/Footers';
import Navbar from './components/shared/navbar/Navbars';
import Home from './components/home/Home';
import Maintenance from './components/maintenance/Maintenance';
import Finishes from './components/maintenance/finishes/Finishes';
import Max3d from './components/maintenance/max3d/Max3d';
import About from './components/about/About';
import Service from './components/services/Service';
import UnitForRent from './components/units/unitForRent/UnitForRent';
import UnitForSale from './components/units/UnitForSale/UnitForSale';
import Details from './components/shared/details/Details';
import Login from './components/auth/login/Login';
import SignUp from './components/auth/signup/SignUp';
import NotFoundPage from './components/shared/notFoundPage/NotFoundPage';
import Units from './components/units/Units';
import Profile from "./components/profile/Profile";
import ResetPass from './components/auth/resetPass/resetPass';
import AddUnit from './components/addUnit/addUnit';
import axios from 'axios';
import withLoadingSpinner from './Spinner/withLoadingSpinner';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to= '/home'/>}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/details/:id/:purpose' element={<Details />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/units' element={<Units />}></Route>
          <Route path='/units/unit-for-sale' element={<UnitForSale />}></Route>
          <Route path='/units/unit-for-rent' element={<UnitForRent />}></Route>
          <Route path='/maintenance' element={<Maintenance />}></Route>
          <Route path='/maintenance/finishes' element={<Finishes />}></Route>
          <Route path='/maintenance/3d-max' element={<Max3d />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/maintenance' element={<Maintenance />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/resetPass' element={<ResetPass/>}></Route>
          <Route path='/addUnit' element={<AddUnit />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default withLoadingSpinner(App, axios);