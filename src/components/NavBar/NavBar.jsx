import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function NavBar() {
    return <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
    </div>
}

export default NavBar