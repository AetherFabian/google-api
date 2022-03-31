import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import Http from '../lib/requestApi';
import '../components/mapContainer.css'


class MapContainer extends Component {

  state = {
    title: "Assaults",
    assaults: [],
    toggleMarks: false,
  };

  componentDidMount = () => {
    this.getData(URL)
  };

  getData = async (api_url) => {
    const response = await Http.instance.get_assaults()
    this.setState({ assaults: response });
  };

  getIcon = () => {

  }

  displayMarks = () => {
    return this.state.assaults.map((assault) => {

      let x = parseFloat(assault.coordinates["x"]);
      let y = parseFloat(assault.coordinates["y"]);
      const google = this.props.google;
      let imageURL = '';
      let typeCrime = assault.crime_type;
      let xicon = 0;
      let yicon = 0;

      if (typeCrime === "Robbery") {
        imageURL = 'https://www.freeiconspng.com/thumbs/robber-icon/robber-crime-thief-flat-icon-0.png';
        xicon = 35
        yicon = 40
      }
      else if (typeCrime === "Homicide") {
        imageURL = 'https://icon-library.com/images/murder-icon/murder-icon-19.jpg';
        xicon = 38
        yicon = 55
      }
      else if (typeCrime === "Car Assault") {
        imageURL = 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Car_icon_alone.png';
        xicon = 40
        yicon = 30
      }
      else if (typeCrime === "Assault") {
        imageURL = 'https://cdn-icons-png.flaticon.com/512/340/340504.png';
        xicon = 25
        yicon = 40
      }
      return <Marker key={assault.id}
        icon={{
          url: imageURL,
          size: new google.maps.Size(xicon, yicon),
          scaledSize: new google.maps.Size(xicon, yicon),
        }}
        position={{
          lat: x,
          lng: y
        }} />
    })
  }

  handleToggle = () => {
    const toggle = this.state.toggleMarks;
    this.setState({ toggleMarks: !toggle })

  }

  render() {
    return (
      <div class="vody" >
        <h1 class="si">Google Maps Assaults</h1>
        <div class="container">
          <div class="item">
            <img src='https://www.freeiconspng.com/thumbs/robber-icon/robber-crime-thief-flat-icon-0.png'
              alt='Robbery' />
            <h3>Robbery</h3>
          </div>
          <div class="item">
            <img src='https://icon-library.com/images/murder-icon/murder-icon-19.jpg'
              alt='Homicide' />
            <h3>Homicide</h3>
          </div>
          <div class="item">
            <img src='https://upload.wikimedia.org/wikipedia/commons/5/5a/Car_icon_alone.png'
              alt='Car Assault' />
            <h3>Car Assault</h3>
          </div>
          <div class="item">
            <img src='https://cdn-icons-png.flaticon.com/512/340/340504.png'
              alt='Assault' />
            <h3>Assault</h3>
          </div>
        </div>
        <div class="Map"  >
          <Map
            google={this.props.google}
            zoom={13}
            style={mapStyles}
            initialCenter={{ lat: 28.6575657, lng: -106.084936 }}>
            {this.displayMarks()}
          </Map>
        </div>
      </div>

    );
  }
}

const mapStyles = {
  width: '80%',
  height: '60%',
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDQ0hak9HMuVbNpwzx_91uLYLuLRiCXvUA'
})(MapContainer);