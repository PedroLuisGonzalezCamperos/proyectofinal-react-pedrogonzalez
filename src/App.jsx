import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/cart/Cart'
import './App.css'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
    <div className='container-app'>
      <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={ <ItemListContainer saludo={"Bienvenidos a la mejor tienda Online, con los mejores Precios"} /> } />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/detail/:idProduct" element={ <ItemDetailContainer /> } />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
         
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
