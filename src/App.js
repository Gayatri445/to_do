import "./App.css";
import ToDoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";


const App = () => {
  return (
    <div className="App">
    <TodoInput/>
    {/* <div className="error">{error && <p>{error}</p>}</div> */}
    <ToDoList/>
  </div>
  )
}

export default App