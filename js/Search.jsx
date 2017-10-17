import React, { Component } from 'react';
import ShowCard from './ShowCard';
import preload from './../data.json';

class Search extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchTerm: 'this is some kind of debug state'
  //   };

  //   this.handleSearchTerm = this.handleSearchTerm.bind(this);
  // }

  state = {
    searchTerm: ''
  }

  handleSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return (
    <div className="search">
      {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
      <header>
        <h1>Svideo {`${this.state.searchTerm}`}</h1>
        <input onChange={this.handleSearchTerm} value={this.state.searchTerm} type="text" placeholder="Search"/>
      </header>
      <div>
        {preload.shows.filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0).map(show =><ShowCard key={show.imdbID} show={show}/>
        )}
      </div>
    </div>
    );
  }
}

export default Search;