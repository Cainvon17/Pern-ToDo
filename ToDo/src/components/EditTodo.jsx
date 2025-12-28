import React from "react";
import { useEffect,useState } from "react";

const EditTodo = ({item}) => {
    const [description,setDescription] = useState(item.descrp);
    const updateDescription = async(e) => {
        e.preventDefault();
        try {
            const body = { descrp: description };
            const response =await fetch(`http://localhost:5000/todos/${item.id}`,{
                method : "PUT",
                headers : {"content-Type" : "application/json"},
                body : JSON.stringify(body)
            });
            console.log(response);
            window.location ="/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return(
    <div className="container">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${item.id}`}>Edit</button>
        <div className="modal" id={`id${item.id}`} onClick={() => {setDescription(item.descrp)}} >
            <div className="modal-dialog">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Edit Todo</h4>                    
                </div>

                <div className="modal-body">
                    <input type="text" className="form-control" value={description} onChange={e => {
                        setDescription(e.target.value)
                    }} /> 
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => updateDescription(e)}>Edit</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => {setDescription(item.descrp)}} >Close</button>
                </div>

                </div>
            </div>
        </div>
    </div>
    )
}
export default EditTodo;