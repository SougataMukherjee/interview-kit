import React, { useState } from 'react'
import {
  TodoContainer,
  TodoItem,
  Button,
} from '../styles/todoStyles'
import type { Todo as TodoType } from '../actions/todoActions'
import Input, { InputVariant } from '../../..//ui/components/input';

interface TodoProps {
  todos: TodoType[]
  pendingCount: number
  onAddTodo: (text: string) => void
  onToggleTodo: (id: number) => void
  onRemoveTodo: (id: number) => void
}

const Todo: React.FC<TodoProps> = ({
  todos,
  pendingCount,
  onAddTodo,
  onToggleTodo,
  onRemoveTodo,
}) => {
  console.log({
  todos,
  pendingCount,
  onAddTodo
})
  const [text, setText] = useState<string>('')

  return (
    <TodoContainer>
      <h2>Redux Todo (TypeScript)</h2>
      <Input
        label="Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant={InputVariant.OUTLINED}
      />
      <Button onClick={() => {
    if (text.trim()) {
      onAddTodo(text)
      setText('')
    }
  }} >Add</Button>

      <p>Pending: {pendingCount}</p>

      {todos && todos.map((todo) => (
        <TodoItem key={todo.id} completed={todo.completed}>
          <span onClick={() => onToggleTodo(todo.id)}>
            {todo.text}
          </span>
          <Button onClick={() => onRemoveTodo(todo.id)}>X</Button>
        </TodoItem>
      ))}
    </TodoContainer>
  )
}

export default Todo
