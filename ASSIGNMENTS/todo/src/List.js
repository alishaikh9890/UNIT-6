
import React from 'react';


function List(){

 const list = [
    { id: 1, title: "Wake up", status: true },
    { id: 2, title: "drink tea", status: false },
    { id: 3, title: "eat maggi", status: true },
    { id: 4, title: "sleep", status: false }
  ]

    return (
        <div>
        <h1>Todo List</h1>
   
    {list.map(el=>(
        el.status==false ? <p style={{color:"red"}}>{el.title}</p> :<p style={{color:"green"}}>{el.title}</p>
    ))}
   

</div>
    )
}

  export default List;



