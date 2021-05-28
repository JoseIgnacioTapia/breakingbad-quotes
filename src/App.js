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

  const consultarAPI = () => {
    console.log('consultando...');
  }

  return (
    <Conteneder>
      <Boton
        onClick={ consultarAPI }
      >Obtener Frase</Boton>
    </Conteneder>
  );
}

export default App;
