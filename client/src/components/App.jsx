import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx'
import { movies } from '../data/movieData.js';
import _ from 'underscore';

// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

// var movies = [
//   {title: 'Mean Girls', watched: true },
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];


// functional/stateless


class App extends React.Component {
  constructor(props) {
    super(props);
    this.setMovieList = this.setMovieList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    list: [],
    fullList: [],
    add: ''

  }
  setMovieList(filteredList) {
    this.setState({
      list: filteredList
    });
  }

  handleChange(event) {
    this.setState({
      add: event.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      // list: this.state.list.concat([{title: this.state.add}]),
      fullList: this.state.fullList.concat([{ title: this.state.add }])
    })
  }

  isEmpty(arr) {
    return _.isEmpty(arr);
  }

  handleClick(movie) {
    if (movie.watched === undefined) {
      movie.watched = true;
      var newList = [];
      for (var i = 0; i < this.state.fullList.length; i++) {
        if (this.state.fullList[i].title === movie.title) {
          newList.push(movie);
        } else {
          newList.push(this.state.fullList[i]);
        }
      }


      this.setState({
        fullList: newList,
      })
      // set this updated movie to the fullList
      // should replace the existing movie
      // can iterate through fullList and compare movie.title
    }
  }



  render() {
    return (
      <div>
        <h1>Movie List!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.add} onChange={this.handleChange}></input>
          <button type='submit' >Add movie</button>
        </form>
        <Search setMovieList={this.setMovieList} list={this.state.fullList} />
        {/*render movielist--passing in prop which is set to movies(imported) */}
        <MovieList moviesProp={this.isEmpty(this.state.list) ? this.state.fullList : this.state.list} onClick={this.handleClick} />
      </div>
    )
  };
}

// <MovieList moviesProp={movies}/>



export default App;