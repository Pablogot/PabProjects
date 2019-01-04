import React from 'react'
import { NavLink } from 'react-router-dom'


import { Navbar,
        NavbarBrand,
        NavbarItem,
        NavbarBurger,
        NavbarMenu,
        NavbarEnd } from 'bloomer'

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
            <Navbar className="hero-head">
                <NavbarBrand className="is-marginless heading has-text-weight-bold">
                    <NavLink className="navbar-item has-text-black" to="/" >
                        <figure className="image">
                            <h1 className="Logo"><i className="fas fa-lg fa-code"></i> Pab Projects</h1>
                        </figure>
                    </NavLink>
                    <NavbarBurger isActive={this.state.isActive} onClick={this.toggleNav} />
                </NavbarBrand>
                <NavbarMenu 
                    className="is-marginless heading has-text-weight-bold" 
                    isActive={this.state.isActive} 
                    onClick={this.toggleNav}>
                    <NavbarEnd>
                        <NavLink to="/blog" className="navbar-item has-text-black" activeClassName="is-active">
                            Blog
                        </NavLink>
                        <NavLink className="navbar-item has-text-black" to="/medium" activeClassName="is-active">
                            Medium
                        </NavLink>
                        <NavbarItem>
                            <figure className="desktop image has-text-black">
                                <a href="https://github.com/Pablogot">
                                    <i className="fab fa-lg fa-github has-text-black" style={{width: '1rem', height: '1rem'}}></i>
                                </a>
                            </figure>
                        </NavbarItem>
                    </NavbarEnd>
                </NavbarMenu>
            </Navbar>
        )
    }
}

export default Header
