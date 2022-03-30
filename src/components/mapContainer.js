import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import Http from '../lib/requestApi';
import Assault from './assaults';


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

  displayMarks = () => {
    return this.state.assaults.map((assault) => {
      console.log(assault.coordinates)
      let x = parseFloat(assault.coordinates["x"]);
      let y = parseFloat(assault.coordinates["y"]);
      return <Marker key={assault.id} position={{
        lat: x,
        lng: y
      }} />
    })
  }

  handleToggle = () => {
    const toggle = this.state.toggleMarks;
    this.setState({toggleMarks: !toggle})
    
  }
  render() {
    return (
      <div>
        <div className='Map'>
          <Map
            google={this.props.google}
            zoom={11}
            style={mapStyles}
            initialCenter={{ lat: 28.6711604, lng: -106.2047057 }}>
            {this.displayMarks()}
          </Map>
        </div>
        <div>
          Hi
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