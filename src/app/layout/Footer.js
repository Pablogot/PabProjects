import React from 'react'

const Footer = () => (

    <main className="hero-foot center" style={{padding: '2rem'}}>
        <div id="footer-grid" style={{width: '768px'}}>
            <div id="a" className="center-column">
                <p className="has-text-centered has-text-black">
                    Lorem Ipsum is the single greatest threat.<br/> We are not - we are not keeping up with other websites.
			    </p>
		    </div>
            <div id="b" className="center-column">
                <p className="title has-text-black">Lor<span className="is-size-5">em</span></p>
                <p className="subtitle is-7 has-text-black">Lorem Ipsun</p>
            </div>
            <div id="c" className="center-column" style={{'borderLeft': '1px solid gray'}}>
                <p className="title has-text-black">B<span className="is-size-5">log</span></p>
                <p className="subtitle is-7 has-text-black">Lorem Ipsun</p>
            </div>
            <div id="d" className="center-column" style={{'borderLeft': '1px solid gray'}}>
                <figure className="center-column navbar-item image">
                    <a href="https://medium.com/Pablogot">
                        <i className="fab fa-lg fa-medium has-text-black" style={{width: '2rem', height: '2rem'}}></i>
                    </a>
                    <p className="subtitle is-7 has-text-black">Medium</p>
                </figure>
            </div>
            <div id="e" className="center-column" style={{'borderLeft': '1px solid gray'}}>
                <figure className="center-column navbar-item image">
                    <a href="https://github.com/Pablogot">
                        <i className="fab fa-lg fa-github has-text-black" style={{width: '2rem', height: '2rem'}}></i>
                    </a>
                    <p className="subtitle is-7 has-text-black">Git</p>
                </figure>
            </div>
        </div>
    </main>

);

export default Footer