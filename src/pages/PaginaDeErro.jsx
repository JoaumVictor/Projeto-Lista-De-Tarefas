import React from 'react';
import { useNavigate } from "react-router-dom";

const PaginaDeErro = () => {
  const navegar = useNavigate();
  return ( 
    <>
      <h1>Página Não Encontrada!</h1>
      <button onClick={ () => navegar("/") }>Voltar</button>
    </>
  );
}
 
export default PaginaDeErro;
