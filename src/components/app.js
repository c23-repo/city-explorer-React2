import React from 'react';
import Header from './header';
import Result from './result';
import Map from './map';
import SearchForm from './search-form';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      location: {},
     };
  }  
  newLocation = location => {
    this.setState({ location });
    console.log(this.state.location);
  }
  render(){
    return (
      <React.Fragment>
        <Header />
        <main>
          <SearchForm saveLocation={this.newLocation} />
          <Map location={this.state.location} />
          <Result {...this.state}/>
          {/* <SearchResults {...this.state}/> */}
        </main>
      </React.Fragment>
      );
  }
}

export default App;
