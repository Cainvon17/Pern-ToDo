import React from 'react'
import { useState } from 'react'
import ListTodo from './components/listTodo';

function App() {
  const [description, setDescription] = useState("");
  const onSubmitF = async e => {
    e.preventDefault();
    try {
      const body = { descrp: description };

      const response =await fetch("http://localhost:5000/todos",{
        method : "POST",
        headers : {"content-Type" : "application/json"},
        body : JSON.stringify(body)
      });
      
      window.location = "/"; 
      //console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    
    <div className="cont ">
      <h1 className="mt-5 text-7xl font-bold underline text-center">PERN TODO</h1>
      <form className="d-flex mt-5 m-10" onSubmit={onSubmitF}>
        <input type="text" className="form-control " value={description} onChange={e => 
          setDescription(e.target.value)} /><button className="btn btn-success">Add</button> 
      </form>
      <ListTodo />
    </div>
    
  )
}   

export default App