import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SaymyName';
import Pessoa from './components/Pessoa';
function App() {
  const name = "Loid";
  const newName =  name.toUpperCase();
  function soma(a,b) {
    return a+b;
  }
  const nome = 'Aline Jorgina'
  return (
    <div className="App">
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
            foto='https://via.placeholder.com/150'/>
    </div>
  );
}

export default App;
