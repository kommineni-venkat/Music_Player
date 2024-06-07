
import React from "react"; 

const Nav = ({ setLibraryStatus, libraryStatus }) => { 
	return ( 
		<nav> 
			<h1>Venky Music Player</h1> 
			<button 
				onClick={() => { 
					setLibraryStatus(!libraryStatus); 
				}} 
			> 
				<h4>PlayList</h4> 
			</button> 
		</nav> 
	); 
}; 

export default Nav; 
