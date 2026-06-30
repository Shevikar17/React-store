import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';

function App() {

   return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="product/:id" element={<ProductDetails/>}/>
        <Route path="cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
