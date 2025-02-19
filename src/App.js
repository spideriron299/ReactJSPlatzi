import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItems';
import { CreateTodoButton } from './CreateTodoButton';

import React from 'react';

const defaultTodos = [
  { key: '1', text: 'Hacer la clase de cripto', completed: false },
  { key: '2', text: 'Ver las karlababys', completed: true },
  { key: '3', text: 'Ver las EliBabys', completed: false },
  { key: '4', text: 'Jugar Zombies con govantes', completed: true },
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={10} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.key}
            text = {todo.text}
            status = {todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton>z</CreateTodoButton>
    </React.Fragment>
  );
}

export default App;