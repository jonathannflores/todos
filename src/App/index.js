import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';
import { useLocalStorage } from './useLocalStorage.js';
import React from 'react';

// const defaultTodos = [
//   {text: 'Beber agua', completed: true},
//   {text: 'Jugar codcito', completed: false},
//   {text: 'Ir al gym', completed: false},
//   {text: 'Estudiar', completed: true},
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1', defaultTodos)


function App() {

  const [todos, saveTodo] = useLocalStorage('TODOS_V1', []);
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const [searchValue, setSearchValue] = React.useState('');

  const resultados = todos.filter((todo)=>{
    return todo.text.toLowerCase().includes(searchValue.toLowerCase())
  })
  
  
  function completeTodo(text){
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true;
    saveTodo(newTodos)
  }

  function deleteTodo(text){
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex ,1)
    saveTodo(newTodos)
  }  

  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {resultados.map(todo => (
          <TodoItem key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onCompleted={()=>completeTodo(todo.text)}
          onDelete={()=>deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

        <CreateTodoButton />
    </>
    
  );
}

export default App;
