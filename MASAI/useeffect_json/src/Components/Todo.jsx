import React from "react";

export const Todo =() => {
    const [inputValue, setInputValue] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [todos , setTodos] = React.useState([])
    const [error, setError] = React.useState(false)
    const [page, setPage] = React.useState(1 )
    React.useEffect(() =>{
        fetchAndUpdateData()
    },[page])

     const fetchAndUpdateData = () => {
        setLoading(true);
        fetch(`http://localhost:3008/tasks?_page=${page}&_limit=3`)
        .then((res) => res.json())
        .then((res) => setTodos(res))
        .catch((err) => setError(true))
        .finally(() => setLoading(false))
      }

     const addTodo = () =>{
     const  payload ={
            title: inputValue,
            status: false,
        };

        const dataToPost = JSON.stringify(payload);

        fetch(`http://localhost:3008/tasks?_page=${page}&_limit=3`,{
            method:"POST",
            body:dataToPost,
            headers:{
                "Content-Type": "application/json",
            },
        })
        .then(() =>{
           fetchAndUpdateData()
        })
     }



    return(
        <div>
            <h1>Todo List Using json server</h1>
        <input type="text"
         placeholder="Add Todo"
         onClick={(e) => setInputValue(e.target.value)}
         />
         <button onClick={addTodo}>Add</button> 
         <hr/>

        {loading ?(
            <h1>Loading..</h1>
            ): error ? (
                 <h3>something went wrong</h3>
                 ) : (
                    <div>
                       { todos.map((todo) => <div key={todo.id}>{todo.title}</div>)}
                       <button>PREV</button>
                       <button>NEXT</button>
                    </div>

                    
                    
                    
                    
                    )
        }
        </div>   
    )
}

