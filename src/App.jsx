import dataHandler from "./modules/dataHandler"
import { useState, useEffect, useRef } from 'react';
import "./styles/App.scss"
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Login from './components/Login';
import Calendar from './components/Calendar';


/* import Dashboard from './components/Dashboard'; */


function App() {
  //Tilføj state fullData, ændre state med setData
  //Add state "fullData", change state with "setData"
  const [fullData, setData] = useState([]);
    useEffect(() => {
      const updateData = async () => {
        const response = await fetch (import.meta.env.VITE_API_URL)
        const data = await response.json()
        setData(data)
      }
      updateData()
      const interval = setInterval(updateData, 5000);
      return () => clearInterval(interval);
    }, []);


    let checksHandled = [];
    if(fullData.checks){
      let serverChecks = [...fullData.checks];

      checksHandled = [...dataHandler(serverChecks)];
     /*  console.log("serverHandled", checksHandled); */
  }
/* //the useRef Hook allows you to persist data between renders
  const prevCountRef = useRef();
  useEffect(() => {
    //assign the ref's current value to the count Hook
    prevCountRef.current;
    console.log(prevCountRef);
  }, [fullData]);
     */
//  console.log("counts: ", fullData.counts) 
    

  return (
    <div className="App">
      <Header/>
      <Dashboard checksData={checksHandled}/>
      {/* <Calendar/> */}
      {/* <Login/> */}
    </div>
  )
}

export default App
