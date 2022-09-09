import logo from './logo.svg';
import './App.css';
import TodoList from './component/todoList.jsx'
function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList/>

    </div>
  );
}

export default App;
