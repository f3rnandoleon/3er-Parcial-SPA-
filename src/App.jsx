import { useState } from 'react'

import {BrowserRouter, Route, Routes}from 'react-router-dom';
import { Home } from './componentes/Home';
import { About } from './componentes/About';
import { Dashboar } from './componentes/Dashboar';
import {Header} from './componentes/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div > 
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/dashboar" element={<Dashboar />}/>
          <Route path="/header" element={<Header />}/>
        </Routes> 

      </BrowserRouter>
    </div>
  )
}

export default App
