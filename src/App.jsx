import { useState, useEffect } from 'react'
import Header from './components/Header'
/* import Login from "./components/Login" */
import fetchData from './modules/fetchData';

function App() {
  

  //tilføj state fulldata, ændre state med setData
  //Add state "fulldata", change state with "setData"
  const [fulldata, setData] = useState([]);

  

  const tableURL = "https://api.pingdom.com/";
  const tableAPI = "3oYKhp8_9NHeNiXEynYDKZcYI39waZKjMYqsZOXQ6BJg9SElwQNWQzoNlMgEJAN__QYnm0Q";
  // let tablenr;

console.log(fulldata)

  useEffect(() => {setData(fetchData(tableAPI, tableURL));
  });

  console.log(fulldata)

 


  return (
    <div className="App">
      <Header></Header>
    {/*   <Login></Login> */}
      <h1>HELLO MONKEYYYSSS!!</h1>
    </div>
  )
}

export default App
