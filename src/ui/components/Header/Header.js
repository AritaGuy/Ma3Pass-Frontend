import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header(){
    return (
        <header>
            <nav className="navbar navbar-expand navbar-light">
                <div className="container-fluid d-flex align-items-center">
                    <Link to="/" className="navbar-brand" href="#">
                        <div className="logo-text">
                            <span className="logo-text-1">ma3</span>
                            <span className="logo-text-2">Pass</span>
                        </div>
                    </Link>

                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">How it Works</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">My Tickets</a>
                        </li>
                    </ul>

                    <a className="btn-main">
                        My Account
                    </a>

                </div>
            </nav>
            
        </header>
    )
}
