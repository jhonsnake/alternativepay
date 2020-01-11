import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Logo from "./components/Logo"
import Navbar from "./components/Navbar"
import Ingreso from "./components/Ingreso"
import Contenido from "./components/Contenido"
import marca from "./misc/img/evertec-logo.png"
import Resultado from "./components/Resultado"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(props) {
  return (
    <Router>
    <>
      <Layout>
        <Navbar/>
        <div className="container">
         <Logo img={marca}/>
         <Contenido>
           <Switch>
           <Route exact path="/">
            <Ingreso />
          </Route>
          <Route path="/resultado">
            <Resultado />
          </Route>
           </Switch>
         </Contenido>
        </div>
      </Layout>
    </></Router>
    
  );
}

export default App;
