import React, { Component }  from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import "./components/Navbar.css";

function Navbar() {
	
	return (

		<header>
			<h3>LOGO</h3>
			<nav>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={() => alert("button clicked")}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;