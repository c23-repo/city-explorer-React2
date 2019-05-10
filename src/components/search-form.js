import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component {
  constructor(props){
    super(props);

    this.state = { 
      searchLocation: ''
    }
  }
  inputHandler = event => {
    this.setState({
      searchLocation: event.target.value
    })
    console.log(this.state.searchLocation);
  }
  submitHandler = event => {
    event.preventDefault();
    superagent.get('https://city-explorer-backend.herokuapp.com/location')
    .query({data: this.state.searchLocation})
    .then(result => {
      this.props.saveLocation(result.body);
    })
  }
  render(){
    return(
      <div>
        <h1> {this.props.query}</h1>
        <form id="search-form" onSubmit={this.submitHandler} >
           <label htmlFor="search">Search for a location</label>
           <input onChange={this.inputHandler} type="text" name="search" id="input-search" placeholder="Enter a location here" />
           <button type="submit">Explore!</button>
        </form>
      </div>
    );
  }
}


export default SearchForm; 