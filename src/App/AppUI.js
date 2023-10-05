import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';
import { TodosLoading } from '../TodosLoading/index.js';
import { TodosError } from '../TodosError/index.js';
import { EmptyTodos } from '../EmptyTodos/index.js';
import React from 'react';
import { TodoContext } from '../TodoContext/index.js';
import { Modal } from '../Modal/index.js';

function AppUI(){

    const {
        loading,
        error,
        resultados,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return(
        <>
            <TodoCounter  />

            <TodoSearch  />
   
            <TodoList>
            {loading && (
                <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
                </>
            )}
            {error && <TodosError />}
            {!loading && resultados.length === 0 && <EmptyTodos />}

            {resultados.map(todo => (
                <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCompleted={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
            ))}
            </TodoList>

            <CreateTodoButton />

            {openModal && (<Modal>
                    Holaaaaaaaaaaaa
                </Modal>)}

        </>
    )
}

export { AppUI }
      {/* completed={completedTodos} total={totalTodos} */}
         {/* searchValue={searchValue} setSearchValue={setSearchValue} */}