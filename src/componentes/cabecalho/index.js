import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Cabecalho = () => (

    <header className="titulo">
        
            <div className="icone-logo">
                <img className="dente-cabe" src="assets/dente.png" />
                <h1>Dentes Saudáveis</h1>
                </div>


            <div className="container-links">
                <Link className="botoes" to="/">HOME</Link>
                <Link className="botoes" to="/contato" >CONTATO</Link>
            </div>

        

    </header>




)

export default Cabecalho;