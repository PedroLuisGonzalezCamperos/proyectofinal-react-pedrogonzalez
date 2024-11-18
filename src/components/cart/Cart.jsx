import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./cart.css"

const Cart = () => {

    const {cart, totalPrice, deleteProductbyId, deleteCart} = useContext(CartContext)

    //Early return

    if (cart.length === 0) {
     return (

<div className='caja-volver'>
<br />
<h2 className='no-hay'>No hay Productos en el carrito 😢</h2><br /><br />
<Link to ="/" className='volver-inicio'>Volver al inicio</Link>

</div>


     )



    }


  return (
    <div className='principal-item-cart'>
        
        <h2 className="title-cart">Productos en el Carrito</h2>
   

    {
       cart.map((productCart)=> (

           <div key={productCart.id} className='item-cart' >
            <img src={productCart.image} width={200} alt="" />
             <p>{productCart.name}</p>
             <p>Cantidad: {productCart.quantity} </p>
             <p>Precio c/u: {productCart.price} </p>
             <p>Precio parcial: {productCart.quantity*productCart.price}</p>
             <button onClick={()=>deleteProductbyId(productCart.id)}>Borrar producto</button>

           </div>

       ))
    }



     <div className='info-cart'>
    <p>Precio Total: {totalPrice()}</p><br />
    <button onClick={deleteCart}>Borrar Carrito</button><br /><br />
    <Link to="/checkout" className='terminar-compra'>Terminar mi compra</Link>
    </div>
    
    </div>
  )
}

export default Cart