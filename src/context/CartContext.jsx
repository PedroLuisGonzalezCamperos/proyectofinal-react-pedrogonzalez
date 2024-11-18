import { createContext, useState } from "react";

//creeamos un contexto llamado CartContext
const CartContext = createContext();

const CartProvider = ({ children }) => {
  //Todo lo que envolvió CartProvider en app.jsx serán children

  //se provera desde este contexto a traves de CartContext.Provider a todos los children que están envueltos por CartProvider

  //A través del objeto {} de value en CartContext.Provider se pasarán los datos que queramos que sean utilizados por los children

  const [cart, setCart] = useState([])

  const addProductIncart = (newProduct) => {

    const condicion = isIncart(newProduct.id)

    if (condicion) {
      //sumar cantidades
      const tempCart = [...cart]
      const findIndex = tempCart.findIndex((productCart)=> productCart.id === newProduct.id)
      tempCart[findIndex].quantity = tempCart[findIndex].quantity + newProduct.quantity
      setCart(tempCart) 
    } else {
      //guardarlo como producto nuevo
      setCart([ ...cart, newProduct])
    }



}

//función que devuelve true o false dependiendo si el producto a comprobar está en el carrito
const isIncart = (idProduct)=>{

return cart.some((productCart)=> productCart.id === idProduct) 

}

//Cantidad total de productos
const totalQuantity = () => {

    const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0)
    return quantity

}

//Precio total de la compra
  
const totalPrice = () => {

const price = cart.reduce((total, productCart)=>total + (productCart.quantity*productCart.price), 0)
return price



}


const deleteProductbyId = (idProduct) => {

const filterProducts = cart.filter((productCart)=>productCart.id!==idProduct)
setCart(filterProducts)


}

const deleteCart = ()=> {

setCart([])


}

  return (
  <CartContext.Provider value={{cart, addProductIncart, totalQuantity, totalPrice, deleteProductbyId,deleteCart}}>
    {children}
    
    
    </CartContext.Provider>

)
};

export { CartContext, CartProvider };
