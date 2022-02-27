import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Button from './Button';
import '../components/Descricao.css';

const Descricao = () => {
  const parametros = useParams();

  return ( 
    <div className="descricao-container">
      <h1>Tarefa</h1>
      <div className="container-voltar">
        <Link to={"/"}><Button mensagem="Voltar" /></Link>
      </div>
      <div className="descricao">
        <h2>{parametros.nome}</h2>
        <p>descrição da tarefa</p>
      </div>
    </div>
  );
}
 
export default Descricao;