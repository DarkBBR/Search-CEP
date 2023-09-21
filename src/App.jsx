//=====Módulos
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'

//=====Pastas
import './styles/styles.css';
import api from './services/api';

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
  async function handleSearch() {
    if (input === '') {
      alert('Preencha o CEP, seu lesado!!!')
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput('');

    } catch {
      alert('Ops, erro ao buscar!')
      setInput('');
    }

  }


  return (
    <div className="container">
      <h1 className='title'>Buscar CEP</h1>
      <div className='containerInput'>
        <input type='text'
          placeholder='exemplo 12345-6789'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='buttonSearch' onClick={handleSearch}>
          <FiSearch size={25} color='#FFF' />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2>CEP: {cep.cep} </h2>
          <span>Logradouro: {cep.logradouro} </span>
          <span>Complemento: {cep.complemento} </span>
          <span>Bairro: {cep.bairro} </span>
          <span>Localidade: {cep.localidade} - {cep.uf} </span>
          <span>DDD: {cep.ddd} </span>
        </main>
      )}
    </div>
  );
}

export default App;