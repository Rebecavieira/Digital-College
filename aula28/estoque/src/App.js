import "./estilo.css";
import React from 'react';
import {Link} from 'react-router-dom';

function Lista(){
  let cursos = [
    'Marketing',
    'FullStack',
    'Data Analytics',
  ];

  return(
    <ul>
        {/* {cursos.map(function(cada){
          return(<li>{cada}</li>)
        })} */}

        {cursos.map(cada => <li>{cada}</li>)}        
    </ul>
  )
}

export default function App() {
  let nome = "Rebeca";

  return (
    <>
      <header>
        
      </header>
      <h1 className="red">Olá Mundo</h1>
      <hr/>
      <h2>Digital College</h2>

      <p>
        Bem Vinda {nome}
      </p>

      <Lista/>

      <hr/>

      <Lista/>

      <hr/>
      
    </>

  )
}