
import { useState, useEffect } from 'react';

import Header from './components/Header';
/* import Dashboard from './components/Dashboard'; */

import fetchData from './modules/fetchData';


function App() {

  //Tilføj state fulldata, ændre state med setData
  //Add state "fulldata", change state with "setData"
  const [fulldata, setData] = useState([]);

  console.log(fulldata) 
 
  useEffect(() => {setData(fetchData());},[]); 
  
  console.log(fulldata)

  return (
    <div className="App">
      <Header></Header>
      {/* <Dashboard></Dashboard> */}
      <h1>HELLO MONKEYYYSSS!!</h1>
    </div>
  )
}

export default App
