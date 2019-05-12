import React from 'react';
import { async } from 'q';
import superagent from 'superagent';

// Recieved guidance from John

class Result extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log('props', this.props);
    return(
      <>
      <div>
        <ul>
          <li> <DarkSky {...this.props} /> </li>
          <li> <Yelp {...this.props} /> </li>
          <li> <EventBrite {...this.props} /> </li>
          <li> <MovieDB {...this.props} /> </li>
          <li> <Trails {...this.props} /> </li>
        </ul>
      </div>
      </>
    );
  }  
}

class Yelp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      apiData: [],
      locationID: 0
    }
  }

  componentDidUpdate(){
    if(this.state.locationID !== this.props.location.id){
      this.fetchNewData();
    }
  }

  fetchNewData = async () => {
    if(Object.values(this.props.location).length !== 0){
      let newData = await superagent.get('https://city-explorer-backend.herokuapp.com/yelp').query({data: this.props.location});
      this.setState({apiData: newData.body, locationID: this.props.location.id})
    }
  }

  render() {
    console.log('we in yelp', this.state);
    let renderedContent = this.state.apiData.map((yelp, index) => (
      <li key={index}>
        <a href={ yelp.url }>{ yelp.name }</a>
        <p>The average rating is { yelp.rating } out of 5 and the average cost is { yelp.price } out of 4</p>
        <img src={ yelp.image_url } alt={ yelp.name }/>
      </li>
    ));
    return(
      <section>
        <h3>Results from the Yelp API </h3>
        <ul className="yelp-results">
        {renderedContent}
        </ul>
      </section>
    );
  }  
}

class MovieDB extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      apiData: [],
      locationID: 0
    }
  }

  componentDidUpdate(){
    if(this.state.locationID !== this.props.location.id){
      this.fetchNewData();
    }
  }

  fetchNewData = async () =>{
    if(Object.values(this.props.location).length !== 0){
      let newData = await superagent.get('https://city-explorer-backend.herokuapp.com/movies').query( {data: this.props.location});
      this.setState({apiData: newData.body, locationID: this.props.location.id});
    }
  }

  render() {
    let renderedContent = this.state.apiData.map((movie, index) => (
      <li key={index}>
        <p><span>{ movie.title }</span> was relased on { movie.released_on }. Out of { movie.total_votes } total votes, { movie.title } has an average vote of { movie.average_votes } and a popularity score of { movie.popularity }.</p>
        <img src= { movie.image_url } alt={movie.title} />
          <p> { movie.overview } </p>
      </li>
    ));
        return(
      <section>
        <h3>Results from the Movie DB API </h3>
        <ul className="movies-results">
        {renderedContent}
        </ul>
      </section>
    );
  }  
}

class DarkSky extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      apiData: [],
      locationID: 0
    }
  }

  componentDidUpdate(){
    if(this.state.locationID !== this.props.location.id){
      this.fetchNewData();
    }
  }

  fetchNewData = async () =>{
    if(Object.values(this.props.location).length !== 0){
      let newData = await superagent.get('https://city-explorer-backend.herokuapp.com/weather').query( {data: this.props.location});
      this.setState({apiData: newData.body, locationID: this.props.location.id});
    }
  }

  render() {
    let renderedContent = this.state.apiData.map((weather, index) => (
      <li key={index}>
        The forecast for { weather.time } is: { weather.forecast }
      </li>
    ));
        return(
      <section>
        <h3>Results from the DarkSky API </h3>
        <ul className="weather-results">
        {renderedContent}
        </ul>
      </section>
    );
  }  
}

class EventBrite extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      apiData: [],
      locationID: 0
    }
  }

  componentDidUpdate(){
    if(this.state.locationID !== this.props.location.id){
      this.fetchNewData();
    }
  }

  fetchNewData = async () =>{
    if(Object.values(this.props.location).length !== 0){
      let newData = await superagent.get('https://city-explorer-backend.herokuapp.com/events').query( {data: this.props.location});
      this.setState({apiData: newData.body, locationID: this.props.location.id});
    }
  }

  render() {
    let renderedContent = this.state.apiData.map((events, index) => (
      <li key={index}>
        <a href={ events.link }>{ events.name }</a>
        <p>Event Date: { events.event_date }</p>
        <p>{ events.summary }</p>
      </li>
    ));
        return(
      <section>
        <h3>Results from the EventBrite API </h3>
        <ul className="events-results">
        {renderedContent}
        </ul>
      </section>
    );
  }  
}


class Trails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      apiData: [],
      locationID: 0
    }
  }

  componentDidUpdate(){
    if(this.state.locationID !== this.props.location.id){
      this.fetchNewData();
    }
  }

  fetchNewData = async () =>{
    if(Object.values(this.props.location).length !== 0){
      let newData = await superagent.get('https://city-explorer-backend.herokuapp.com/trails').query( {data: this.props.location});
      this.setState({apiData: newData.body, locationID: this.props.location.id});
    }
  }

  render() {
    let renderedContent = this.state.apiData.map((trails, index) => (
      <li key={index}>
       <p>Hike Name: <a href={ trails.trail_url }>{ trails.name }</a>, Location: { trails.location }, Distance: { trails.length } miles</p>
      <p>On { trails.condition_date } at { trails.condition_time }, trail conditions were reported as: { trails.conditions }</p>
      <p>This trail has a rating of { trails.stars } stars (out of { trails.star_votes } votes)</p>
      <p>{ trails.summary }</p>
      </li>
    ));
        return(
      <section>
        <h3>Results from the Hiking Project API </h3>
        <ul className="trails-results">
        {renderedContent}
        </ul>
      </section>
    );
  }  
}


export default Result 
