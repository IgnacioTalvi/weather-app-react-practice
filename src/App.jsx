import { useState } from 'react'
import './App.css'
import Main from './components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  const apiKey = import.meta.env.VITE_API_KEY;
console.log("Tu API KEY es:", apiKey);

  return (
    <>
        <Main/>
    </>
  )
}

export default App
