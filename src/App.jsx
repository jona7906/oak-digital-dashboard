import { useState, useEffect } from 'react'
import Header from './components/Header'
/* import Login from "./components/Login" */
import fetchData from './modules/fetchData';

function App() {
  

  //tilføj state fulldata, ændre state med setData
  //Add state "fulldata", change state with "setData"
  const [fulldata, setData] = useState([]);

  

  // let tablenr;

/* console.log(fulldata) */
 
  useEffect(() => {setData(fetchData());
  }); 
  
 /*  let serverData = []; */
 
 /*  fetch(`http://localhost:3000/src/fetch.php`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    }, })
    .then((response) =>  response.json())
    .then((data) =>  console.log(data)); */
  
  /* console.log(serverData) */

 


  return (
    <div className="App">
      <Header></Header>
    {/*   <Login></Login> */}
      <h1>HELLO MONKEYYYSSS!!</h1>
    </div>
  )
}

export default App
