import React from 'react';

class Result extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <>
        <ul>
          <li> <DarkSky /> </li>
          <li> <Yelp /> </li>
          <li> <EventBrite /> </li>
          <li> <MovieDB /> </li>
          <li> <Trails /> </li>
        </ul>
      </>
    );
  }  
}

class Yelp extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <section>
        <h3>Lorem Ipsum</h3>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </section>
    );
  }  
}

class MovieDB extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <section>
        <h3>Lorem Ipsum</h3>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </section>
    )
  }
}

class DarkSky extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <section>
      <h3>Lorem Ipsum</h3>
      <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
    </section>
    )
  }
}

class EventBrite extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <section>
      <h3>Lorem Ipsum</h3>
      <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
    </section>
    )
  }
}


class Trails extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <section>
      <h3>Lorem Ipsum</h3>
      <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
    </section>
    )
  }
}


export default Result 
