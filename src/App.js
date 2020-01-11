import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Logo from "./components/Logo"
import marca from "./misc/img/evertec-logo.png"

import Navbar from "./components/Navbar"

import Contenido from "./components/Contenido"
import Ingreso from "./components/Ingreso"

function App(props) {
  return (
    <>
      <Layout>
        <Navbar/>
        <div className="container">
         <Logo img={marca}/>
         <Contenido>
           <Ingreso/>
         </Contenido>
        </div>
      </Layout>
    </>
    
  );
}

export default App;
