// import './App.css';

const compromissos = ['Acordar', 'Tomar café', 'Estudar', 'Treinar', 'Almoçar', 'Aula', 'Dormir'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <ol>
        {compromissos.map((element) => Task(element))}
      </ol>
    </div>
  );
}

export default App;
