import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import { useState } from 'react';

// a and href works but it reload the page 
// so we need Link to for not reload the page 

export default function Navbar(props) {
    const [navcls1, setNavCls1] = useState("active");
    const [navcls2, setNavCls2] = useState("");

    const highlight = (event) => {
        if (navcls1 === "active" && event.target.id === "navAbout") {
            setNavCls2("active");
            setNavCls1("");
        }
        else if (navcls2 === "active" && event.target.id === "navHome") {
            setNavCls1("active");
            setNavCls2("");
        }
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link ${navcls1}`} id="navHome" onClick={highlight} aria-current="page" href="#">Home</a>
                            {/* <Link className={`nav-link ${navcls1}`} id="navHome" onClick={highlight} aria-current="page" to="/">Home</Link> */}
                        </li>
                        {/* <li className="nav-item">
                            <Link className={`nav-link ${navcls2}`} id="navAbout" onClick={highlight} to="/about">{props.abouttext}</Link>
                        </li> */}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    <form className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        {/* ${props.mode === 'light'?'dark':'light'}  this is ternary operator*/}
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode</label>
                    </form>
                </div>
            </div>
        </nav>
    )
}

// argument type setting  if prop type is not the type written below it will give error
Navbar.propTypes = {
    title: PropTypes.string.isRequired,  // is required means mandate to fill the value
    abouttext: PropTypes.string
}

Navbar.defaultProps = {
    title: "Title required",
    abouttext: "About"
}