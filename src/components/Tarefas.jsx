import React from 'react';
import Tarefa from './Tarefa';

const Tarefas = ({lista, completaTarefa, removeTarefa}) => {
  return (
    <>
      <h3>Lista de Tarefas</h3>
      { lista.map((alvo, i) => <Tarefa removeTarefa={removeTarefa} completaTarefa={completaTarefa} key={i} tarefa={alvo}/>) }
    </>
  );
}
 
export default Tarefas;
