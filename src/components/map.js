import React from 'react';

class Map extends React.Component {
  constructor(props){
    super(props);
    
    this.mapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.location.latitude}%2c%20${this.props.location.longitude}&zoom=13&size=600x300&maptype=roadmap%20%20&key=${process.env.REACT_APP_GEOCODE_API_KEY}`;
  }
  render(){
    return(
      <div>
        <img src={this.mapSrc} />
      </div>
    );
  }
}

export default Map;