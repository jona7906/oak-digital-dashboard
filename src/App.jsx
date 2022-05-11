
import { useState, useEffect, useRef } from 'react';
import "./styles/App.scss"
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Login from './components/Login';
/* import Dashboard from './components/Dashboard'; */

// import fetchData from './modules/fetchData';
 import Api from "./privates/Api";


function App() {



  //Tilføj state fulldata, ændre state med setData
  //Add state "fulldata", change state with "setData"
  const [fulldata, setData] = useState([]);
 

    const api = Api();
 
    let myHeaders = new Headers();
    myHeaders.append("Authorization", api.apiAuth + " " + api.apiToken);
  
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        console.log("This will run every second!");
        fetch(api.proxy + api.apiHost, requestOptions)
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) => console.log("error", error));
      }, 10000);
      return () => clearInterval(interval);
    }, []);

    
/* //the useRef Hook allows you to persist data between renders
  const prevCountRef = useRef();
  useEffect(() => {
    //assign the ref's current value to the count Hook
    prevCountRef.current;
    console.log(prevCountRef);
  }, [fulldata]);
     */
 console.log("counts: ", fulldata.counts) 
    

  return (
    <div className="App">
      <Header/>
      <Dashboard checksData={fulldata}/>
      {/* <Login/> */}
    </div>
  )
}

export default App
