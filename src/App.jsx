import React, { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Adicionatarefa from './components/AdicionaTarefa';
import Tarefas from './components/Tarefas';
import PaginaDeErro from './pages/PaginaDeErro';
import Descricao from './components/Descricao';

const App = () => {

  const [lista, addLista] = useState([
    {
      id: 123456789,
      nome: 'Exemplo de tarefa...',
      status: false,
    },
  ]);

  const completaTarefa = (TarefaID) => {
    const listaAtualizada = lista.map((alvo) => {
      if(alvo.id === TarefaID) return { ...alvo, status: !alvo.status}
      return alvo;
    })
    addLista(listaAtualizada);
  };

  const removeTarefa = (TarefaId) => {
    const listaAtualizada = lista.filter((alvo) => alvo.id !== TarefaId);
    addLista(listaAtualizada);
  };

  const carregarLista = () => {
    const minhaLista = localStorage.getItem("myList");
    if (minhaLista === null) {
      console.log("Não tem nenhuma lista salva!");
      return;
    }
    addLista(JSON.parse(minhaLista));
  };

  const setarNoStorage = () => {
    localStorage.setItem("myList", JSON.stringify(lista));
  };

  const funcAddNaLista = (tarefa) => {
    const novaLista = [...lista, {
      id: uuidv4(),
      nome: tarefa,
      status: false,
    }]
    addLista(novaLista);
  };

  useEffect(() => {
    carregarLista();
  }, []);

  useEffect(() => {
    setarNoStorage();
  }, [lista]);
  
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" exact element={
            <>
              <h1>Minhas Tarefas</h1>
              <Adicionatarefa placeholder="Digite Sua Tarefa" funcAddNaLista={funcAddNaLista}/>
              <Tarefas completaTarefa={completaTarefa} removeTarefa={removeTarefa} lista={lista}/>
            </>
            } />
            
          <Route path="/Tarefa/:nome" exact element={
            <Descricao />
          } />

          <Route
          path="*"
          element={<PaginaDeErro />}
          />
        </Routes>
      </div>
    </ Router>
  )
};

export default App;
