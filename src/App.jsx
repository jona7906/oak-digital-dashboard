import { useState } from 'react'
import Header from './components/Header'
import Login from "./components/Login"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Login></Login>
      <h1>HELLO MONKEYYYSSS!!</h1>
    </div>
  )
}

export default App
