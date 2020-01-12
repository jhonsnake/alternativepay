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
                
        <button  onClick={() => this.openModal()} className="button"><div className="button__icon-container button--table"><i className="material-icons md-light icon--small">image_search</i>{this.props.nombre}</div></button>
               
                <Modal visible={this.state.visible} width="80%"  effect="fadeInUp" onClickAway={() => this.closeModal()}>
                   <div className="modal modal--center">
                   <div className="modal__content ">
                       <div className="modal__content modal--no-border">
                       <h2 className="content__subtitle">DETALLES DE LA FACTURA</h2>
                    <div className="divisor"></div>
                        <div>
                        <Table>
      <Thead>
        <Tr>
         
         <Th className="table__title">Referencia</Th>
         <Th className="table__title">Valor</Th>
         <Th className="table__title">Descripción</Th>
         <Th className="table__title">Ref. alterna</Th>
         <Th className="table__title">Sin recargo hasta</Th>
         <Th className="table__title">Pagadero hasta</Th>
         
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          
          <Td className="table__item table-item--center">4444</Td>
        <Td className="table__item table-item--center" >COP {this.props.valorApagar}</Td>
          <Td className="table__item table-item--center">Prueba</Td>
          <Td className="table__item table-item--center">2222</Td>
          <Td className="table__item table-item--center">2020 /02 /15</Td>
          <Td className="table__item table-item--center">2020 /02 /15</Td>
         
          
          
        </Tr>
        
        
       
      </Tbody>
   
    </Table>
    <button className="button button--center button--regular" onClick={() => this.closeModal()}>Cerrar</button>
                        </div>
                        
                        
                    </div>
                       </div>
                    
                   </div>
                </Modal>
            </section>
        );
    }
}