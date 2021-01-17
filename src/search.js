import React from 'react';
import './App.css';

const SearchBOx=(props)=>{
	return(
		<input type="text" className="vsearch"
   placeholder={props.placeholder} 
   onChange={props.handleChange}
   />)
}

export default SearchBOx;