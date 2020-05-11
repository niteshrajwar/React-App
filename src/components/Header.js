import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark">
                    <ul className="navbar-nav inline">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"> LOGO </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link"> Login </Link>
                        </li>
                    </ul>
                </nav>

            </div>


    )
}
