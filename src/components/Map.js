import React from 'react'

export default class Map extends React.Component {
  constructor() {
    super()
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 45,
        longitude: 0,
        zoom: 13
      },
      active: false,
      list: [
        { name: 'london', lat: 59, lon: -6 },
        { name: 'paris', lat: 54, lon: -2 }
      ]
    }
  }

  render() {
    return (
      <>
      

        {/* <ReactMapGL {...this.state.viewport} eventData={this.state}
          height={'320px'}
          width={'600px'}
          mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
          zoom={0.25}
        >
          {this.state.list.map(elem => (
            <Marker
              key={elem.name}
              latitude={elem.lat}
              longitude={elem.lon}
            >
              <img className='pin' src='../assets/pin.png'></img>
            </Marker>
          ))}
        </ReactMapGL>*/}
      </> 

    )
  }
}


