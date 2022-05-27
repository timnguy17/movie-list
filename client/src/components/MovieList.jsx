import React from 'react';

var movies = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];


//if you have curlys need explicit return-need to wrap in paraens
//if writing JS need to be inside curlys
//while in a functional component, no need to reference 'this'



var MovieList = (props) => {

  return (
    <div>
      <ul>
        {props.moviesProp.map(movie => {
          //declare onclick in scope for handler
          var onClick = function (event) {
            props.onClick(movie);
          }//for each movie, return in form of....
          return (
            <div key={movie.title}>
              <li>{movie.title}</li>
              <button type='button' onClick={onClick}>{movie.watched ? 'Watched' : 'To Watch'}</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default MovieList;


// movies.map(movie =)