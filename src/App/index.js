import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>    
  );
}

export default App;

// const defaultTodos = [
//   {text: 'Beber agua', completed: true},
//   {text: 'Jugar codcito', completed: false},
//   {text: 'Ir al gym', completed: false},
//   {text: 'Estudiar', completed: true},
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1', defaultTodos)