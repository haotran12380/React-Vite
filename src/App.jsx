import './components/todo/todo.css';
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import TodoLogo from './assets/react.svg'
import { useState } from 'react';
const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching Youtube" }
  ])
  const haotran = `Ragnar Lothbrok`;
  const age = `24`;
  const data = {
    adress: `Da Lat`,
    country: `Viet Nam`
  }
  const addNewTodo = (name) => {
    alert(`Call me ${name}`)
  }

  return (

    <div className="todo-container">
      <div className="todo-tittle">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={haotran}
        age={age}
        data={data}
        todoList={todoList}

      />
      <div className='todo-image'>
        <img src={TodoLogo} className='logo' />
      </div>
    </div>

  )
}

export default App
