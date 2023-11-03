import './App.css'
import Home from './components/home/Home';
import Footer from './components/shared/footer/Footers'
import Navbar from './components/shared/navbar/Navbars';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />     
        <Footer />
      </BrowserRouter>
      {/* <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes> */}
    </>
  )
}

export default App
