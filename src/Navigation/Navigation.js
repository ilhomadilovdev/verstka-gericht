import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


export default class Navigation extends Component {
    render() {
        return (
            <div className='content1'>
                <div className='Gericht' >Gerícht</div>
                <ul className='menu'>
                    <li className='nav_link' ><Link className="nav_item1" to="/">Home</Link></li>
                    <li className='nav_link' ><Link className="nav_item2" to="/pages">Pages</Link></li>
                </ul>

                <div className='registr' >Log in / registration</div>

                <div className='regis_book' >book table</div>
            </div>
        )
    }
}
