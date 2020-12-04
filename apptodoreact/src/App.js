import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="todo-app">
      <h1>O que vou fazer hoje? 🤔 </h1>
        <TodoList />
    </div>
  );
}

export default App;
