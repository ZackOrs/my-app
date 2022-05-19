import React, { Component } from 'react'

const NavBar = ({ counterLength }) => {
	return (
		<nav className='navbar navbar-light bg-light'>
			<a className='navbar-brand' href='#'>
				Navbar <span className='badge bg-pill bg-secondary'>{counterLength}</span>
			</a>
		</nav>
	)
}

export default NavBar
