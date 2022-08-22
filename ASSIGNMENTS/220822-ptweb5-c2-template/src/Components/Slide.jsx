import React from "react";






function data(page){

  fetch(`https://slides-app-220822.herokuapp.com/slides?id=${page}`)
  .then(function(res){
  
      console.log(res)
  
      return res.json()
  
  })
  .then(function(res){
  
      let user = res 
  
  
  })
  .catch(function(err){
  
      console.log(err)
  })
}





data(1)





function Slide() {

  return (
    <div className="slide-container" data-cy="slide">
      <h3 data-cy="title"></h3>
      <p data-cy="description"></p>
    </div>
  );
}

export default Slide;
