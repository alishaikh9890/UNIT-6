import React from "react";
import { GroceryInput } from "./GroceryInput";
import { v4 as uuid } from "uuid"
import { GroceryList } from "./GroceryList";

const Grocery = () => {
    const [data, setData] = React.useState([]);


    const handleAdd = (title, url) => {
        const payload ={
            title: title,
           url:url,
            status: false,
            id:uuid()
        }
       setData([...data, payload])
      
       
    }


const handleDelete = (id) => {
    const updateData= data.filter((item) =>
    item.id !== id);
    setData(updateData)
    
}


    return (
        <div className="grocery">
           
        <GroceryInput handleAdd={handleAdd}/>

        {data.map((item) => (
            <GroceryList key={item.id} {...item} handleDelete={handleDelete}/>
        ))}

        </div>
        
    )
}


export { Grocery }