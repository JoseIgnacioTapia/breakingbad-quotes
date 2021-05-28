import { useState } from 'react';
import Frase from './components/Frase';
import styled from '@emotion/styled';

const Conteneder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {

  // State de frases
  const [frase, guardarFrase] = useState({});

  const consultarAPI =  async () => {
    const api = await fetch('https://breakingbadapi.com/api/quote/random');
    const frase = await api.json();
    guardarFrase(frase[0]);
  }

  return (
    <Conteneder>
      <Frase
        frase={frase}
      />

      <Boton
        onClick={ consultarAPI }
      >Obtener Frase</Boton>
    </Conteneder>
  );
}

export default App;
