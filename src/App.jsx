
import { useState, useEffect, useRef } from 'react';
import "./styles/App.scss"
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Login from './components/Login';
/* import Dashboard from './components/Dashboard'; */


function App() {
  //Tilføj state fullData, ændre state med setData
  //Add state "fullData", change state with "setData"
  const [fullData, setData] = useState([]);
    useEffect(() => {
      const updateData = () => {
        fetch(import.meta.env.VITE_API_URL)
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) => console.log("error", error));
      }
      updateData()
      const interval = setInterval(updateData, 10000);
      return () => clearInterval(interval);
    }, []);

    
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
      <Dashboard checksData={fullData}/>
      {/* <Login/> */}
    </div>
  )
}

export default App
