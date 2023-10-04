import React from "react";
import { useLocalStorage } from "./useLocalStorage";
// import { Children } from "react/cjs/react.production.min";

const TodoContext = React.createContext();

function TodoProvider({ children }){

    const { item: todos, saveItem: saveTodo, loading, error} = useLocalStorage('TODOS_V1', []);
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
    return(
    <TodoContext.Provider value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        resultados,
        completeTodo,
        deleteTodo
    }}>
         {children}
    </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}