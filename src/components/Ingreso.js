import React, {useRef, useState, useEffect} from 'react'
import {
    Redirect
  } from "react-router-dom";

function Error(){
    
    return(<div className="error">
        <p className="content__extract animated bounceInUp content--alert">¡Ha habido un error!, recuerda llenar todos los campos, Los datos ingresados no existen... Si estás en un entorno de pruebas intenta con la referencia:123, documento: 123123123</p>
    </div>)
}

function Ingreso() {
    const [error, setError] = useState(false)
    const [linked, setLinked] = useState(false)

    useEffect(() => {
        if(linked){
            setError(false)
        }
      },[linked]);

    const referencia =123;
    const documento = 123123123;

    const handleSubmit = (e) => {
        e.preventDefault()
        if(referenciaInput.current.value != referencia || docInput.current.value != documento){
            setError(true)
            setLinked(false)
        }else{

            setLinked(true)
        }
        
     
    }

    const validateError = ()=>{
        if(error){
            return <Error/>;
        } 

        if(!error && linked){
            return <Redirect from="/" to="/resultado" /> 
        }
       
        
    }

    const referenciaInput = useRef();
    const docInput = useRef();

    
    return (
        <div className="ingreso">
            <p className="content__extract">Comienze el proceso de pago ingresando la siguiente información</p>
            <form className="formulario">
                <input className="formulario__input" type="text" placeholder="Comercio" value="Comercio de prueba" disabled  />
                <input className="formulario__input" type="number"  placeholder="Referencia" ref={referenciaInput} />
                <input className="formulario__input" type="text" placeholder="Documento" ref={docInput} />
                <button onClick={handleSubmit} className="button button--primary button--center">Ingresar</button>
            </form>
            {validateError()}

        </div>
    )
}

export default Ingreso
