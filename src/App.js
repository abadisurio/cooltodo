import logo from './logo.svg';
import './App.css';
import DisplayTodos from './components/DisplayTodos';
import Todos from './components/Todos';

function App() {
  return <div>
    <Todos />
    <DisplayTodos />
  </div>
}

export default App;
