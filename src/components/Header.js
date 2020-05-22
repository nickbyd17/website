import React from 'react'
import portrait from '../assets/images/portrait.jpg'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <img className="portrait" src={portrait} alt="Portrait"/>
                    <h1><strong>Nicolas Bayard</strong></h1>
                    <h2>Computer Engineering Student</h2>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">About me</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
