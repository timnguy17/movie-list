import React from 'react';
import { movies } from '../data/movieData.js'



class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };




  handleChange(event) {
    this.setState({
      searchString: event.target.value
    });

  }

  handleSubmit(event) {
    event.preventDefault(); //prevents auto render/reset of submit
    console.log(this.state.searchString)
    console.log(this.props.list)

    var matches = [];
    var str = this.state.searchString;

    var filteredMovies = this.props.list.filter(movie => {
      if (movie.title.includes(str)) {
        return true;
      } else {
        return false;
      }
    });
    console.log(filteredMovies)
    if (filteredMovies.length === 0) {

      alert('No Matches');
    }
    this.props.setMovieList(filteredMovies);
  }

  handleClickWatched (event) {

  }

  handleClickToWatch (event) {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.searchString} onChange={this.handleChange} />
        <button type='submit'> Go! </button>
        <button onClick={this.handleClickWatched}> Watched </button>
        <button onClick={this.handleClickToWatch}> To Watch </button>
      </form>

    )
  }

}




export default Search;