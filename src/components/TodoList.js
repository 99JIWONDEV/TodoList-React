import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { List } from '../../node_modules/react-virtualized/dist/commonjs/index';

// const TodoList = ({ todos, onRemove, onToggle, onChangeSelectedTodo, onInsertToggle }) => {
//     return (
//         <div className="TodoList">
//             {todos.map(todo => (
//                 <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} onChangeSelectedTodo={onChangeSelectedTodo} onInsertToggle={onInsertToggle}  />
//             ))}
//         </div>
//     )
// }

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRender = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );
  return (
    <List
      className="TodoList"
      width={512}
      height={654}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRender}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList);
