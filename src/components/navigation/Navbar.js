import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = (props) => {
    return (
        <nav className="nav">
            <div className="navMenu">
            <NavLink to="/" activeStyle>
                        Home
            </NavLink>
            <NavLink to="/random" activeStyle>
                        Random
            </NavLink>
            <NavLink to="/search" activeStyle>
                        Search
            </NavLink>
            </div>
        </nav>
    )
}

export default Navbar