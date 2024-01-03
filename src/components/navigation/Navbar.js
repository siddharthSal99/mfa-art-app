import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = (props) => {
    return (
        <nav className="nav">
            <div className="nav-menu">
                <div className="nav-item">
                    <NavLink to="/">
                            Home
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/random">
                                Random
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/search">
                                Search
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/history">
                                History
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar