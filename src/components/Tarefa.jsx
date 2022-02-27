import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';
import { Link } from 'react-router-dom';

import './Tarefa.css';

const Tarefa = ({tarefa, completaTarefa, removeTarefa}) => {
  return (
    <div
    className="container-tarefa"
    style={tarefa.status ? {borderLeft: "6px solid rgb(21, 173, 21)"} : {}}
  >
    <div className="texto-tarefa" onClick={() => completaTarefa(tarefa.id)}>
     <p>{tarefa.nome}</p>
    </div>

    <div className="botoes-container">
      <div className="detalhes-tarefa-container">
        <Link to={`/tarefa/${tarefa.nome}`}><CgInfo className="detalhe-tarefa" /></Link>
      </div>
      <div className="remove-tarefa-container">
        <CgClose onClick={() => removeTarefa(tarefa.id)} className="remove-tarefa"/>
      </div>
    </div>
  </div>
  );
}

export default Tarefa;
