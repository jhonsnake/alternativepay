import React, { useRef, useState, useEffect } from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import PagoModal from "./modals/PagoModal";
import DetalleModal from "./modals/DetalleModal"
import PagosSeleccionadosModal from "./modals/PagoSeleccionadosModal"



function Resultado() {

    const [total, setTotal] = useState(0)

    const checkInput1 = useRef();
    const checkInput2 = useRef();



   function handleChange(e){
        
            if(checkInput1.current.checked && !checkInput2.current.checked){
                setTotal(a)
            }

            if(!checkInput1.current.checked && checkInput2.current.checked){
                setTotal(b)
            }

            if(checkInput1.current.checked && checkInput2.current.checked){
                setTotal(a+b)
            }

            if(!checkInput1.current.checked && !checkInput2.current.checked){
                setTotal(0)
            }
        
    }

    const a = 300000;
    const b = 200000;

    return (<div>
        <h2 className="content__subtitle">FACTURAS RELACIONADAS</h2>
        <div className="divisor"></div>
        <Table>
      <Thead>
        <Tr>
         <Th className="table__title">Seleccion</Th>
         <Th className="table__title">Referencia</Th>
         <Th className="table__title">Valor</Th>
         <Th className="table__title">Descripción</Th>
         <Th className="table__title">Ref. alterna</Th>
         <Th className="table__title">Sin recargo hasta</Th>
         <Th className="table__title">Pagadero hasta</Th>
         <Th className="table__title">Acción</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td className="table__item table-item--center table-item--center"><input ref={checkInput1} onChange={handleChange} type="checkbox"/></Td>
          <Td className="table__item table-item--center">4444</Td>
    <Td className="table__item table-item--center" >COP {a}</Td>
          <Td className="table__item table-item--center">Prueba</Td>
          <Td className="table__item table-item--center">2222</Td>
          <Td className="table__item table-item--center">2020 /02 /15</Td>
          <Td className="table__item table-item--center">2020 /02 /15</Td>
          <Td className="table__item table-item--center"><PagoModal valorApagar={a} resultado={true}/></Td>
          <Td className="table__item table-item--center"><DetalleModal valorApagar={a} resultado={true} nombre="Detalles"/></Td>
          
        </Tr>
        
        
        <Tr>
        <Td className="table__item table-item--center table-item--center"><input ref={checkInput2} onChange={handleChange} type="checkbox"/></Td>
          <Td className="table__item table-item--center">4444</Td>
    <Td className="table__item table-item--center">COP {b}</Td>
          <Td className="table__item table-item--center">Prueba</Td>
          <Td className="table__item table-item--center">2222</Td>
          <Td className="table__item table-item--center">2020 /02 /15</Td>
          <Td className="table__item table-item--center">2020 /02 /15</Td>
          <Td className="table__item table-item--center"><PagoModal valorApagar={b} resultado={false}/> </Td>
          <Td className="table__item table-item--center"><DetalleModal valorApagar={b} resultado={false} nombre="Detalles"/></Td>
        </Tr>
      </Tbody>
   
    </Table>
    <div className="total">
          <ul className="total__list">
    <li className="total__item"><p className="total__item--primary">TOTAL COP {total}</p></li>
              <li className="total__item"><PagosSeleccionadosModal valorApagar={total} resultado={true}/></li>
          </ul>
      </div>

      <h2 className="content__subtitle">HISTORICO DE PAGOS</h2>
        <div className="divisor"></div>
        <Table>
      <Thead>
        <Tr>
         <Th className="table__title">Referencia</Th>
         <Th className="table__title">Valor</Th>
         <Th className="table__title">Estado</Th>
         <Th className="table__title">Acción</Th>

        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td className="table__item table-item--center">4444</Td>
          <Td className="table__item table-item--center">COP 300.000</Td>
          <Td className="table__item table-item--center table-item--success">Aprobado</Td>
          <Td className="table__item table-item--center button--container"><DetalleModal valorApagar={300000} resultado={false} nombre="Detalles"/></Td>
        </Tr>
        <Tr>
          <Td className="table__item table-item--center">4444</Td>
          <Td className="table__item table-item--center ">COP 300.000</Td>
          <Td className="table__item table-item--center table-item--alert">Rechazado</Td>
          <Td className="table__item table-item--center button--container"><DetalleModal valorApagar={300000} resultado={false} nombre="Detalles"/></Td>
        </Tr>
      </Tbody>
   
    </Table>
    
    </div>)

}

export default Resultado;