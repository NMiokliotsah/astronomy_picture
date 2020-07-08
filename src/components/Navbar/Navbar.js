import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container">
                <a href="#" className="navbar-brand">
                    <span className="text-uppercase font-weight-bold">Astronomy picture</span>
                </a>

                <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>

                <div id="navbarSupportedContent" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className={props.active === "/astronomy_picture" ? "nav-item active" : 'nav-item'} onClick={props.onClick}>
                            <Link className="nav-link" to='/astronomy_picture'>Picture of the day</Link>
                        </li>
                        <li className={props.active === "/gallery" ? "nav-item active" : 'nav-item'} onClick={props.onClick}>
                            <Link className="nav-link" to="/gallery">Gallery</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;