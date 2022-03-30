import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Component } from 'react';

class MapContainer extends Component{
 render(){
  return (
   <div> 
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176}}
      />
    </div>
  );
} }

const mapStyles = {
    width: '100%',
    height: '100%',
  };

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDQ0hak9HMuVbNpwzx_91uLYLuLRiCXvUA'
  })(MapContainer);