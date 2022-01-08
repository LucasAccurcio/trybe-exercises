import './App.css';
import FormPersonalData from "./FormPersonalData"

function App() {
  return (
    <div className="App">
      <h1>Formulário de dados Pessoais e Profissional</h1>
        <fieldset>
          <legend>Dados Pessoais</legend>
        <FormPersonalData />
        </fieldset>
    </div>
  );
}

export default App;
