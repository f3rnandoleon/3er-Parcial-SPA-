import React from 'react'
import {Link} from 'react-router-dom';
function Dashboar() {
  return (
    <div>
        <lu>
    <Link to="/home"><li>Home</li></Link>
    <Link to="/about"><li>About</li></Link>
    <Link to="/dashboar"><li>Dashboar</li></Link>
    <Link to="/header"><li>Header</li></Link>
    </lu>
    <h1>dashboar</h1>
    </div>
  )
}

export {Dashboar}