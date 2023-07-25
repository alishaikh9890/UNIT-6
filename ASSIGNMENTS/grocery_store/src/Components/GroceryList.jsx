import React from "react";


 const GroceryList = ({id, title, url, handleDelete}) => {

    return (
        <div className="groceryList" style={{
            display:"flex",
            textAlign:"center",
            justifyContent:"space-around"
            
           

        }}>
            <img src={url} />
            <p>{title}</p>
            
            <button onClick={() => handleDelete(id) } >Delete</button>
        </div>
    )
 } 

export { GroceryList }