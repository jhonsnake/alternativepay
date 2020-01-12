import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
 import done from "../../misc/img/done.gif"
 import deny from "../../misc/img/deny.gif"
 import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

export default class PagoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
 
    openModal() {
        this.setState({
            visible : true
        });
    }
 
    closeModal() {
        this.setState({
            visible : false
        });
    }
 
    render() {
        return (
            <section>
                <button onClick={() => this.openModal()}  className="button button--primary button--table">Pagar</button>
               
                <Modal visible={this.state.visible} width="80%"  effect="fadeInUp" onClickAway={() => this.closeModal()}>
                   <div className="modal modal--center">
                   <div className="modal__content ">
                       <div className="modal__content modal--no-border">
                       <h2 className="content__subtitle">ESTADO DE LA TRANSACCIÓN</h2>
                    <div className="divisor"></div>
                        {this.props.resultado?<div>
                        <p className="modal__title modal__title--success">APROBADA</p>
                        <img className="done-gif" src={done} alt="done"/></div>:
                        <div>
                        <p className="modal__title modal__title--deny">RECHAZADA</p>
                        <img className="done-gif" src={deny} alt="deny"/>
                        </div>}
                        <Table>
      <Thead>
        <Tr>
         <Th className="table__title">Mensaje</Th>
         <Th className="table__title">Sitio</Th>
         <Th className="table__title">Referencia</Th>
         <Th className="table__title">Valor</Th>


        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td className="table__item table-item--center">Esto es un mensaje de prueba</Td>
          <Td className="table__item table-item--center">Compañía de prueba</Td>
          <Td className="table__item table-item--center">4444</Td>
        <Td className="table__item table-item--center">${this.props.valorApagar}</Td>          
        </Tr>
       
      </Tbody>
   
    </Table>
                        <button className="button button--center button--regular" onClick={() => this.closeModal()}>Cerrar</button>
                    </div>
                       </div>
                    
                   </div>
                </Modal>
            </section>
        );
    }
}