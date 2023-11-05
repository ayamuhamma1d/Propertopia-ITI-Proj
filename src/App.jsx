import './App.css'
import Footer from './components/shared/footer/Footers'
import Navbar from './components/shared/navbar/Navbars';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home'
import Maintenance from './components/maintenance/Maintenance'
import Finishes from './components/maintenance/finishes/Finishes'
import Max3d from './components/maintenance/max3d/Max3d'
import About from './components/about/About'
import Service from './components/services/Service'
import UnitForRent from './components/units/unitForRent/UnitForRent'
import UnitForSale from './components/units/UnitForSale/UnitForSale'
import Login from './components/authentication/login/Login'
import SignUp from './components/authentication/signup/SignUp'
import NotFoundPage from './components/shared/notFoundPage/NotFoundPage';
import Units from './components/units/Units';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/units' element={<Units/>}></Route>
          <Route path='/units/unit-for-sale' element={<UnitForSale />}></Route>
          <Route path='/units/unit-for-rent' element={<UnitForRent />}></Route>
          <Route path='/maintenance' element={<Maintenance />}></Route>
          <Route path='/maintenance/finishes' element={<Finishes />}></Route>
          <Route path='/maintenance/3d-max' element={<Max3d />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/maintenance' element={<Maintenance />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
