import React from "react";
import { GroceryList } from "./GroceryList";



const GroceryInput = ({handleAdd}) => {

    const [title, setTitle] = React.useState("")
    const [url , setUrl] = React.useState("")
    

    return (
        <div className="groceryInput">
         <input type="text" placeholder="Grocerys" onChange={(e) => setTitle(e.target.value)} />
         <input type= "text" placeholder="Item_url" onChange={(event)=> setUrl(event.target.value)} />
         <button onClick={() => handleAdd(title,url)}>Add</button>
        </div>
          
    )
}

export { GroceryInput }