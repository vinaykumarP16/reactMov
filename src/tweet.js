import React from 'react';
import './App.css';

function Tweet({name,actors,imdbRating,storyline,posterurl,releaseDate}){



	return(
		<div className="tweet">
		<div>{posterurl}</div>
		<h3>{name}</h3>
		<p>{actors}</p>
		<h6>rating:{imdbRating}</h6>
		<h6>release:{releaseDate}</h6>


		</div>
		);
}


export default Tweet;