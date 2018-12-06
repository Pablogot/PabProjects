import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {

    state = {
        isActive: false,
    };

    toggleNav = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }))
    };

    render() {
        return (
            <nav className="navbar"
                aria-label="main navigation"
                style={{
                    borderBottom: 'solid 1px #dddddd',
                }}>
                <div className="navbar-brand">
                    <NavLink
                        className="navbar-item"
                        to="/"
                    >
                        <span className="Logo">PabsProjects</span>
                    </NavLink>
                    <button className="button navbar-burger" onClick={this.toggleNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className={this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
                    <div className="navbar-start">
                        <NavLink
                            className="navbar-item"
                            to="/blog"
                            activeClassName="is-active"
                        >
                            <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                                <i className="fas fa-code"></i>
                            </span>
                            Blog
                        </NavLink>
                        <a href="/#" className="navbar-item">
                            <span className="icon" style={{ marginRight: 5 }}>
                                <i className="fab fa-lg fa-medium"></i>
                            </span>
                            Medium
                        </a>
                    </div>
                    <div className="navbar-end">
                        <a className="navbar-item" href="https://github.com/Pablogot">
                            <span className="icon">
                                <i className="fab fa-lg fa-github"></i>
                            </span>
                        </a>
                    </div>
                </div >
            </nav >
        )
    }
}

export default Header