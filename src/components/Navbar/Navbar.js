import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={props.active === "/astronomy_picture" ? "nav-item active": 'nav-item'} onClick={props.onClick}>
                        <Link className="nav-link" to='/astronomy_picture'>Picture of the day</Link>
                    </li>
                    <li className={props.active === "/gallery" ? "nav-item active": 'nav-item'} onClick={props.onClick}>
                        <Link className="nav-link" to="/gallery">Gallery</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;