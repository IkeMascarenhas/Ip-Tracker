import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents, useMapEvent } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import marker from '../img/icon-location.svg'
import { useMapContext } from "../contexts/MapContext";

type MapProps = {
  location: {
    country: string,
    region: string,
    timezone: string,
  },
}


const Map = ({location}:MapProps) => {

  const {lat, setLat, lon, setLon, fetchMap} = useMapContext()
  
  function SetMapComponent() {
    const map = useMap()
    map.setView([lat, lon], map.getZoom())
    const mapEvent = useMapEvent('click', () => {
      map.setView([lat, lon], map.getZoom())
    })
        

    return (
      <>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]}>
          <Popup>
            That's your location
          </Popup>
        </Marker>
      </>
    )
  }
  

  return (
    <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={true} style={{ height: 500 }} className='map'>
      <SetMapComponent />
    </MapContainer>
  )
}

export default Map