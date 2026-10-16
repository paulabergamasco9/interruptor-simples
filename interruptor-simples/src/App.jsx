import { useState } from 'react';

function App() {
    const [ativo, setAtivo] = useState(false);

  const alternarInterruptor = () => {
    setAtivo(!ativo);
  };

  const estiloBotao = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: ativo ? 'green' : 'red', 
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button onClick={alternarInterruptor} style={estiloBotao}>
        {/* 4. Operador ternário no texto do botão */}
        {ativo ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default App;