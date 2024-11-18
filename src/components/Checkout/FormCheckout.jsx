import React from 'react'
import "./checkout.css"

const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {
  return (
    <div className='formCheckout'><br />
<form onSubmit={handleSubmitForm}>
    <label>Nombre Completo</label>
    <input type="text" name='fullname' value={dataForm.fullname} onChange={handleChangeInput}/>

     <label>Teléfono</label>
     <input type="number" name= "phone" value={dataForm.phone} onChange={handleChangeInput}/>

     <label>email</label>
     <input type="email" name='email' value={dataForm.email} onChange={handleChangeInput}/>

     <button className='boton' type='submit'>Enviar mi orden</button>

</form>



    </div>
  )
}

export default FormCheckout