import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SaymyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';

function App() {
  const name = "Loid";
  const newName =  name.toUpperCase();
  function soma(a,b) {
    return a+b;
  }
  const nome = 'Aline Jorgina'
  return (
    <div className="App">
        <Form/>
        <Evento/>
        <h1>Testando css global</h1>
        <Frase/>
        <Frase/>
        <List/>
        <h2>Alterando o jsx, {newName}</h2>  
        <p>{soma(2,3)}</p>    
        
        <HelloWorld/>
        <SayMyName nome='Loid'/>
        <SayMyName nome='Machado'/>
        <SayMyName nome={nome}/>
        <Pessoa 
            nome='Ivanilda' 
            idade='12' 
            profissao='Estudante' 
            foto='https://via.placeholder.com/150'
          />

          <h1>Renderização Condicional</h1>
          <Condicional/>
    </div>
  );
}

export default App;
