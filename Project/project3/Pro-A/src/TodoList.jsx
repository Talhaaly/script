   // TodoList.jsx
   import React, { useState } from 'react';
   import { css } from '@emotion/react';

   const TodoList = () => {
     const [todos, setTodos] = useState([]);
     const [inputValue, setInputValue] = useState('');
     const [editIndex, setEditIndex] = useState(null);

     const addTodo = () => {
       if (inputValue.trim() !== '') {
         setTodos([...todos, inputValue]);
         setInputValue('');
       }
     };

     const deleteTodo = (index) => {
       const updatedTodos = todos.filter((_, i) => i !== index);
       setTodos(updatedTodos);
     };

     const editTodo = (index) => {
       setEditIndex(index);
       setInputValue(todos[index]);
     };

     const updateTodo = () => {
       const updatedTodos = [...todos];
       updatedTodos[editIndex] = inputValue;
       setTodos(updatedTodos);
       setEditIndex(null);
       setInputValue('');
     };

     return (
       <div css={container}>
         <input
         style={{
            padding: '10px',
            borderRadius: '5px',
         }}
           type="text"
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)}
         />
         {editIndex !== null ? (
           <button onClick={updateTodo}>Update Todo</button>
         ) : (
           <button onClick={addTodo}>Add Todo</button>
         )}
         <ul>
           {todos.map((todo, index) => (
             <li key={index}>
               {todo}
               <button onClick={() => editTodo(index)}>Edit</button>
               <button onClick={() => deleteTodo(index)}>Delete</button>
             </li>
           ))}
         </ul>
       </div>
     );
   };

   const container = css`
     max-width: 400px;
     margin: 0 auto;
     padding: 20px;
     border: 1px solid #ccc;
     border-radius: 5px;
   `;

   export default TodoList;