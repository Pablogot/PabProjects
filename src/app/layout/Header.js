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
            <nav className="hero-head" aria-label="main navigation">
                <div class="columns is-mobile is-marginless heading has-text-weight-bold">
                    <div class="column left">
                        <NavLink className="navbar-item has-text-black" to="/" >
                            <figure class="navbar-item image">
                                <h1 className="Logo"><i className="fas fa-lg fa-code"></i> Pab Projects</h1>
                            </figure>
                        </NavLink>
                    </div>
                    <div className='column right'>
                        <NavLink to="/blog" className="navbar-item has-text-black" activeClassName="is-active">
                            Blog
                        </NavLink>
                        <NavLink className="navbar-item has-text-black" to="/medium" activeClassName="is-active">
                            Medium
                        </NavLink>
                        <figure class="navbar-item desktop image has-text-black">
                            <a href="https://github.com/Pablogot">
                                <i className="fab fa-lg fa-github has-text-black" style={{width: '1rem', height: '1rem'}}></i>
                            </a>
                        </figure>
                    </div>
                </div>
            </nav >
        )
    }
}

export default Header