import React, { Component } from 'react'
import classes from './map.module.css'
import mapboxgl from 'mapbox-gl'

class AboutMap extends Component {
 state = {
    lat: 38.51069325138627,
    lng: -76.14305540284829,
    zoom: 6,
    bearing: 0,
    pitch: 0,
    mapId: 'map',
    token: 'pk.eyJ1IjoicnVmMDM4NSIsImEiOiJjam1qaG9iOGQwZnNnM3ZxbHBkdmw4YTA4In0.p-EkzalIDB7Sbn3gSWA4GQ',
    mapboxSource: 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v2.3.0/mapbox-gl-geocoder.min.js',
    mapWidth: '100%',
    mapHeight: '80vh',
    styleTable: {
      1: 'mapbox://styles/ruf0385/cjzw2ah6t0bp11cnz7p9xjz2k',
      2: 'mapbox://styles/mapbox/light-v10',
      3: 'mapbox://styles/mapbox/cj5l80zrp29942rmtg0zctjto'
    }
 }    



  componentDidMount() {
    console.log(document.getElementsByClassName('main-col')[0].style);
    mapboxgl.accessToken = this.state.token

    //add Mapbox and Canvas API to DOM
    const mapboxScript = document.createElement('script')
    mapboxScript.src = this.state.mapboxSource
    mapboxScript.async = true
    document.body.appendChild(mapboxScript)

    //check browser support
    if (!mapboxgl.supported()) {
        console.log('WARNING: Your browser is not officailly supported by Mapbox GL')
    }

    
    //create map
    window.map = new mapboxgl.Map({
      container: this.state.mapId,
      style: this.state.styleTable[2],
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      pitch: this.state.pitch,
      bearing: this.state.bearing
    })

}

  render() {
    const mapDiv = (
      <div className={classes.MapWrapper}>
        <div
            id={this.state.mapId}
            style={{height: this.state.mapHeight, width: this.state.mapWidth}}>
        </div>
      </div>
    )

    return (
      <div>
        {mapDiv}
      </div>
    )
  }
}

export default AboutMap
