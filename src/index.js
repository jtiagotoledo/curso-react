import './index.css'
import ReactDom from "react-dom";
import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

ReactDom.render(
    <React.Fragment>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação do aluno" 
            aluno="Pedro"
            nota={9.3}/>
        <Fragmento></Fragmento>
    </React.Fragment>,
    
    document.getElementById('root')
    )