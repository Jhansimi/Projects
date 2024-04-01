import React,{useState} from 'react'
import "./TodoApp.css"

const TodoApp = () => {

    const [addtodo,setAddtodo]=useState('')
    const [todos,setTodo]=useState([])

    function addtodohandler(e){
       
        setAddtodo(e.target.value)
    }

    const addBtn=()=>{

        
        if (addtodo.trim() !== '') {
            setTodo([...todos, addtodo]);
            setAddtodo(''); 
        }
        console.log("todos..",todos)

    }

    const handleDelete=(id)=>{
        console.log("id...",id)

        const getDeletedEle=todos.filter((val)=>val)

    }


  return (
    
    <div className='bg-container'>
    <div className='input-container'>
    
    <input type="text" className='input-text' placeholder='Add Todo..' value={addtodo} onChange={addtodohandler}/>
    <button onClick={addBtn}>Add</button>
    </div>
    <div className='container'>
    
 

    {todos.map((val,index)=>{
        return(
            <div className='d-flex justify-content-around p-3 mt-5' key={index}>
            <div className='d-flex'>
         <input type="checkbox"/>
         <h5 className='m-2'>{val}</h5>
        </div>
        <div>
    <button className='m-2' onClick={()=>handleDelete(index)}>Delete</button>
    <button>Edit</button>
    </div>
    </div>
   
          
          
        )
    })}
 
   
    </div>

   
    
  
      
    </div>
  )
}

export default TodoApp
