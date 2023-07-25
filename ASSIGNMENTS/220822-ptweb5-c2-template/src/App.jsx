import Slide from "./Components/Slide";
import "./App.css";
import React from "react";

// once you download the template; please run  "npm install" command and that will install all the packages required for this project by referencing package.json;

// do not remove any of the data-cy attributes;

// API to get the data : https://slides-app-220822.herokuapp.com/slides









export default function App() {
  const [page , setPage] = React.useState(1)
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([])
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    fetchAndUpdateData();
   }, [page]);
  
   const fetchAndUpdateData = () => {
    setLoading(true);
    fetch(`https://slides-app-220822.herokuapp.com/slides?_page=${page}&_limits=2`) 
    .then((res) => res.json())
    .then((res) => setData(res))
    .catch((err) => setError(true))
    .finally(() => setLoading(false));
   };

  return (
    <div className="App">
      <h1 data-cy="header" >Slides</h1>

      <div className="slide-container" data-cy="slide">
      <Slide data={data} />
      </div>

      <button data-cy="prev"
        onClick={() => setPage(page - 1)}
        disabled = {page===1}
        >
          Prev
          </button>
      <button data-cy="next"
      onClick={() => setPage(page + 1)} 
       disabled = {page ===Math.ceil(data.length)}
   
      >
        Next
        </button>
    </div>
  );
}
