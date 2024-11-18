import { useState } from "react"
import "./itemdetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({ product }) => {

  //las siguientes dos líneas de código son de la clase 10 pero no de la 11 
  //const [currentImage, setCurrentImage] = useState(product.image)

  //const images = product.image.filter( (image) => image !== currentImage )

  //estas siguientes líneas son de la clase 11 y 12

const [ShowItemCount, setShowItemCount] = useState(true)


const {  addProductIncart } = useContext(CartContext)

const addProduct = (count) => {

const productCart = { ...product, quantity:count}

addProductIncart(productCart)
setShowItemCount(false)

}




  return (
    <div className="item-detail">
      
      <div className="images-detail-container">

        <div className="secondary-images">
       
        </div>

        <div className="main-image">
          <img src={product.image} />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>
        {

         ShowItemCount === true ? (
           <ItemCount stock={product.stock} addProduct={addProduct}/>


         ): (

           <Link to="/cart" className="terminar">Terminar mi compra</Link>
         )

        }
        
      </div>
    </div>
  )
}
export default ItemDetail