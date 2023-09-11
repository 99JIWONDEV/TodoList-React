import React from "react";
import TodoListItem from "./TodoListItem";
import './TodoList.scss'

const TodoList = ({ todos, onRemove, onToggle, onChangeSelectedTodo, onInsertToggle }) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} onChangeSelectedTodo={onChangeSelectedTodo} onInsertToggle={onInsertToggle}  />
            ))}
        </div>
    )
}

export default TodoList