import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="https://google.com">
                        <img className="navbar-logo"
                            src="https://static.zoom.us/static/6.1.6656/image/new/ZoomLogo.png"
                            srcSet="https://static.zoom.us/static/6.1.6656/image/new/ZoomLogo.png 1x"
                            alt="Zoom logo" aria-hidden="true" data-iml="1243.5999999940395"
                            data-atf="true" />
                    </a>
                </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="https://zoom.com" style={{fontSize: 15}}> Join</a>
                    </li>
                    <li>
                        <a href="https://zoom.com" style={{fontSize: 15}}>Host</a>
                    </li>
                    <li>
                        <a href="https://zoom.com" style={{fontSize: 15}}>Sign In</a>
                    </li>
                    <li>
                        <a className='signup'>SIGN UP IT'S FREE</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default NavBar;