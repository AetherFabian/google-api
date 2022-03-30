import React from "react";
import { Marker } from 'google-maps-react';

const Assault = (props) => {
    const { assaults } = props
    assaults.map((assault) => {
        console.log(assault.coordinates)
        let x = parseFloat(assault.coordinates["x"]);
        let y = parseFloat(assault.coordinates["y"]);
        return <Marker key={assault.id} position={{
            lat: x,
            lng: y
        }} />
    })
}
export default Assault;