import React, { useState } from 'react';

import './App.css';



interface ITodo {
  text: string
  complete: boolean
}

const App: React.FC = () => {

  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setInputValue(event.target.value)

  }
  const submitHandler = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    addTodo(inputValue);
    setInputValue('')

  }

  const addTodo = (here: string):void => {
    const newTodos: ITodo[] = [...todos, { text: here, complete: false }]
    setTodos(newTodos);

  }

  const completeTodo=(index:number):void=>{
    const newTodos = [...todos]
    newTodos[index].complete  = ! newTodos[index].complete  
    // if (newTodos[index].complete){
    //   newTodos[index].complete=false
    // }
    // else{
    //   newTodos[index].complete=true
    // }
   
    
    setTodos(newTodos)
  }
  
  const removeTodo=(text:string):void=>{
    const newTodos = [...todos]
    setTodos(newTodos.filter(todo=>(todo.text!==text)))
  }
  

  console.log(todos)
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <h1>Todo List</h1>
        <input value={inputValue} onChange={handleChange} required></input>
        <button type='submit'>Add Todo</button>
      </form>
      <section>{todos.map((todo:ITodo, index:number) => (
        <div key={index}>
          <div style={{textDecoration:todo.complete?'line-through':''}}>
            {todo.text}
          </div>

          <button onClick={()=>{completeTodo(index)}}>{todo.complete ?'Incomplete':'Complete'}</button>
          {' '}
          <button onClick={()=>removeTodo(todo.text)}>&times;</button>
          {' '}

        </div>

      ))}</section>



    </div>
  );
}

export default App;
