import React, { Component } from 'react'

const NavBar = props => {
	return (
		<nav className='navbar navbar-light bg-light'>
			<a className='navbar-brand' href='#'>
				Navbar <span className='badge bg-pill bg-secondary'>{props.counterLength}</span>
			</a>
		</nav>
	)
}

export default NavBar
