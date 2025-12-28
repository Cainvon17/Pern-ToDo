import React from "react";
import { useEffect,useState } from "react";
import EditTodo from "./EditTodo";



const ListTodo = () => {
    const [todos, setTodos] = useState([]);

    const deleteTodo = async (id) =>{
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
                method : "DELETE"
            });
            setTodos(todos.filter(item => item.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }
    const getTodos = async() =>{
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonDta =await response.json();
            setTodos(jsonDta); 
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getTodos();
    }, []);
    console.log(todos);
    return(
        <table className="table table-hover m-10">
            <thead>
            <tr>
                <th className="text-center">Description</th>
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
                
            </tr>
            </thead>
            <tbody className="">  
                {todos.map(item => (
                    <tr key={item.id}>
                    <td className="text-center">{item.descrp}</td>
                    <td className="text-center"><EditTodo item={item} /></td>
                    <td className="text-center"><button className="btn btn-danger" onClick={() => deleteTodo(item.id)}>Delete</button></td>
                    </tr> 
                ))}          
            </tbody>
        </table>
    )
}

export default ListTodo;