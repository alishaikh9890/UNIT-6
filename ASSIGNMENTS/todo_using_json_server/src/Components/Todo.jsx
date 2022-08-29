import React from "react";


 export const Todo = () =>{
    const [inputValue, setInputValue] = React.useState("");
    const [loading, setLoading]= React.useState(false);
    const [todos, setTodos] = React.useState([]);
    const [error, setError] = React.useState(false);
    const [page,setPage] = React.useState(1);
    

    React.useEffect(() => {
        fetchAndUpdateData()
    },[])

    const fetchAndUpdateData =() => {
        setLoading(true);
        fetch(`http://localhost:3008/tasks`)
        .then((res) => res.json())
        .then((res) => setTodos(res))
        .catch((err) => setError(true))
        .finally(() => setLoading(false));
        
    };

    const addTodo = () => {
        const payload ={
            title: inputValue,
            status: false,
        }
        const dataToPost = JSON.stringify(payload);

        fetch(`http://localhost:3008/tasks`, {
            method: "POST", 
            body: dataToPost,
            headers: {
                "Content-Type" : "application/json"
            },
        }).then(() => {
            fetchAndUpdateData()
        })
    }

     
    return(
        
        <div className="todo">
            <h1>Todo list with json server</h1>
            <input 
            type="text"
             placeholder="Add the new Todo" 
             onClick={(e) => setInputValue(e.target.value)}
             />
             <button onClick={addTodo} >Add</button>

             {loading ? (
             <div>Loading...</div>
            ) : error ? (
                <div>something went wrong</div>
            ) : (
                todos.map((todo) => <div key={todo.id}>{todo.title}</div>)
            )}
        
            
        </div>
    )
}

