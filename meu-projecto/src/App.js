import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Loid"
  const newName =  name.toUpperCase()
  function soma(a,b) {
    return a+b
  }
  return (
    <div className="App">
        <h2>Alterando o jsx, {newName}</h2>  
        <p>{soma(2,3)}</p>    
    </div>
  );
}

export default App;
