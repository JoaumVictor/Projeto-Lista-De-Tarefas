import React, { useState } from 'react';
import Button from './Button';
import './AdicionaTarefa.css';

const Adicionatarefa = ({funcAddNaLista, placeholder }) => {

  const [valorDoInput, recebeMudancas] = useState('');

  const observaInput = (e) => {
    recebeMudancas(e.target.value);
  }

  const resolverNovaTarefa = () => {
    funcAddNaLista(valorDoInput);
    recebeMudancas("");
  }

  return ( 
    <div className="container-add-tarefa">
      <input
      onChange={observaInput}
      className='input-text'
      type="text"
      value={valorDoInput}
      placeholder={placeholder}
      />
      <div className='separar'>
        <Button func={resolverNovaTarefa} mensagem="Adicionar" />
      </div>
    </div>
   );
}
 
export default Adicionatarefa;