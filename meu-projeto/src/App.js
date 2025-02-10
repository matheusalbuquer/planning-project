import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  const nome= "Maria";

  return (
    <div className="App">
      <h1>Testando css</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>

      <Pessoa nome="Albuquerque" idade="28" profissao="Atirador" foto = "https:via.placeholder/150"/>
    </div>
  );
}

export default App;
