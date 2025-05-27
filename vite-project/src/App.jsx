import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router";
import Home from './Pages/Home'
import About from './Pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
        </Routes>
        
    </BrowserRouter>
  )
}

export default App
