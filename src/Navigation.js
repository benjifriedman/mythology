import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<>
		<hr />
		<nav>
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<hr style={{"max-width":"50px"}}/>
			<li><Link to="/mercury">Mercury</Link></li>
			<li><Link to="/venus">Venus</Link></li>
			<li><Link to="/earth">Earth</Link></li>
			<li><Link to="/mars">Mars</Link></li>
			<li><Link to="/jupiter">Jupiter</Link></li>
			<li><Link to="/saturn">Saturn</Link></li>
		</ul>
		</nav>
		</>
		)
	}

export default Navigation;

