import React from 'react'
import { useState } from 'react'
import FormCheckout from './FormCheckout'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, addDoc, collection, doc, setDoc } from 'firebase/firestore'
import db from '../../db/db.js'
import { Link } from 'react-router-dom'
import "./checkout.css"




//llegué hasta los 1:27:00 minutos

const Checkout = () => {

    const [dataForm, setDataForm]= useState({

    fullname: "",
    phone: "",
    email: ""
    })

    const [idOrder, setIdOrder] = useState(null)


    const {cart, totalPrice, deleteCart} = useContext(CartContext)

    const handleChangeInput = (event) => {

      setDataForm({ ...dataForm, [event.target.name]: event.target.value})

    }

const handleSubmitForm = (event) => {

event.preventDefault()

const order = {

 buyer: {...dataForm}, 
 products: [...cart],
 date: Timestamp.fromDate(new Date()),
 total: totalPrice()

}

uploadOrder(order)

}

const uploadOrder = (newOrder) => {

const ordersRef = collection(db, "orders")
addDoc(ordersRef, newOrder)
.then((response)=> setIdOrder(response.id))
.catch((error)=> console.log(error))
.finally(()=>{

//Una vez finalizada la orden borramos los productos del carrito
updateStock()
})

}


const updateStock = () => {

cart.map(({id, quantity, ...dataProduct})=>{

const productRef = doc(db, "products", id)
setDoc(productRef, {...dataProduct, stock: dataProduct.stock-quantity})
})

//una vez finalizada la actualización de stock, borramos el carrito
deleteCart()

}


  return (
    <div className='checkout'>

      {
        idOrder===null ? (<FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm}/>) : (
        <div>

       <h2>Su orden se subió correctamente!</h2>
       <p>Por favor guarde su número de seguimiento: {idOrder}</p>
       <Link to="/">Volver al inicio</Link>

        </div>


        )


      }




    </div>
  )
}

export default Checkout