import './App.css';
import React, { useState, useRef, useCallback, useReducer } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import ToDoEdit from './components/ToDoEdit';

function createBulkTodos(){
  const array = [];
  for (let i = 1; i <= 2500; i++){
    array.push({
      id:i,
      text: `할 일 ${i}`,
      checked: false,
    })
  }
  return array;
}

function todoReducer(todos, action) {
  switch(action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo =>
        todo.id === action.id ? {...todo, checked: !todo.checked} : todo, 
        );
        default:
          return todos;
  }
}


// const App = () => {
  // 11.5.2
  // const [todos, setTodos] = useState(
  // 11.5.1
  //   [
  //   {
  //     id: 1,
  //     text: '리액트의 기초 알아보기',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '컴포넌트 스타일링 해보기',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: '일정 관리 앱 만들어 보기',
  //     checked: false,
  //   },
  // ]
  // 11.5.2
  // createBulkTodos
  // );

  const App = () => {
    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)
    const nextId = useRef(2501);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      dispatch({type: 'INSERT', todo})
      // 11.5.1
      // setTodos(todos.concat(todo));
      // nextId.current += 1;
      // 11.5.2
      // setTodos(todos => todos.concat(todo))
      nextId.current += 1;
    },
    [todos],
  );

  // 11.5.1
  // const onRemove = useCallback(
  //   (id) => {
  //     setTodos(todos.filter((todo) => todo.id !== id));
  //   },
  //   [todos],
  
  // 11.5.2
  // const onRemove = useCallback(
  //   (id) => {
  //     setTodos(todos => todos.filter((todo) => todo.id !== id));
  //   },
  //   [todos],
  // );
  const onRemove = useCallback(id => {
    dispatch({type: 'REMOVE', id});
  },[todos],
  )

  //11.5.1
  // const onToggle = useCallback((id) => {
  //   setTodos( 
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //     ),
  //   );
  // }
  // ,[todos],

  // 11.5.2
  // const onToggle = useCallback((id) => {
  //   setTodos(todos => 
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //     ),
  //   );
  // }
  // ,[todos],
  // );

const onToggle = useCallback(id=> {
  dispatch({type: 'TOGGLE', id});
},[todos],
)

  // const [selectedTodo, setSelectedTodo] = useState(null);
  // const [insertToggle, setInsertToggle] = useState(false);

  // const onInsertToggle = () => {
  //   if (selectedTodo) {
  //     setSelectedTodo(null);
  //   }
  //   setInsertToggle((prev) => !prev);
  // };
  // const onChangeSelectedTodo = (todo) => {
  //   setSelectedTodo(todo);
  // };

  // const onUpdate = (id, text) => {
  //   onInsertToggle();
    
  //   setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  // };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} 
      // onChangeSelectedTodo={onChangeSelectedTodo} onInsertToggle={onInsertToggle}
      />
      {/* {insertToggle && (
        // <ToDoEdit
        //   onInsert={onInsert}
        //   // selectedTodo={selectedTodo}
        //   onInsertToggle={onInsertToggle}
        //   // onUpdate={onUpdate}
        //   insertToggle={insertToggle}
        // />
      )} */}


    </TodoTemplate>
    
  );
};

export default App;
