import React from "react";

const Slide = ({data}) => {

 
return (
<>
{data.map((product) => (
   <>
    <h3 data-cy="title">{product.title}</h3>
    <p data-cy="description">{product.description}</p>
    </>
      
  ))}</>
 

)


  
}

export default Slide;
