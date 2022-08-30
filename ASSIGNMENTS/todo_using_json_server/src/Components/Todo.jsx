import React from "react";

 export const Todo = () =>{
    const [inputValue, setInputValue] = React.useState("");
    const [loading, setLoading]= React.useState(false);
    const [todos, setTodos] = React.useState([]);
    const [page,setPage] = React.useState(1);
    const [totalItems, setTotalItems] =React.useState(0)
    const [error, setError] = React.useState(false);
    
    
    React.useEffect(() => {
        fetchAndUpdateData()
    },[page])

    const fetchAndUpdateData = () => {
        setLoading(true);
        fetch(` http://localhost:3008/tasks?_page=${page}&_limit=3`)
        .then((res) => {
            let total = res.headers.get("X-Total-Count");
            setTotalItems(+total);
            return res.json();
        })
        
        .then((res) => setTodos(res))
        .catch((err) => setError(true))
        .finally(() => setLoading(false));
    };

    const addTodo = () => {
        const payload = {
            title: inputValue,
            status: false,
        };

        const dataToPost = JSON.stringify(payload);

        fetch(` http://localhost:3008/tasks`, {
            method: "POST", 
            body: dataToPost,
            headers: {
                "Content-Type" : "application/json"
            },
        }).then(() => {
            fetchAndUpdateData();
            setInputValue("");
        })
    }

      
    return(
        
        <div className="todo">
            <h1>Todo list with json server</h1>
            <input 
            type="text"
             placeholder="Add the new Todo" 
             onChange={(e) => setInputValue(e.target.value)}
             value={inputValue}
             />
             <button onClick={addTodo} >Add</button>
            <hr/>
             {loading ? (
             <div>Loading...</div>
            ) : error ? (
                <div>something went wrong</div>
            ) : (
                <div>
               { todos.map((todo) => (
               <div key={todo.id}>{todo.title}</div>
                ))}
                <button onClick={() => setPage(page - 1)} disabled={page===1} >
                    PREV
                    </button>
                <button
                 onClick={() => setPage(page + 1)}
                  disabled={page=== Math.ceil(totalItems / 3)} 
                 
                 >
                    NEXT
                    </button>
                </div>
                )}
        </div>
    )
}

