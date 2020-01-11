import React from 'react'
import minilogo from "../misc/img/placetopay.png"


function Contenido(props) {
    return (
        <>
          <div className="content">
           <div className="content__items">
             <h1 className="content__title">Pagos electrónicos</h1>
             <p className="content__extract">Desde su casa, oficina o cualquier lugar, pague de forma segura con nuestro sistema de pago, use nuestros servicios las 24 horas y los 7 días de la semana.</p>
            <div className="divisor"></div>
            {props.children}
           </div>

         </div>
         <div className="mini-container" >
           <img className="mini-logo" src={minilogo} alt="placetopay"/>
         </div></>
        
    )
}

export default Contenido
