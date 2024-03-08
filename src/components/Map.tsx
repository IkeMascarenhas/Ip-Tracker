import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvent } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useMapContext } from "../contexts/MapContext";
import markerMap from '../img/icon-location.svg'
import { Icon } from 'leaflet';

// type MapProps = {
//   location: {
//     country: string,
//     region: string,
//     timezone: string,
//   },
// }

const markerMapIcon = new Icon ({
  iconUrl : markerMap,
  iconSize : [35,42], // size of the icon
  iconAnchor : [22,94], // point of the icon which will correspond to marker's location
  popupAnchor : [-3, -76] // point from which the popup should open relative to the iconAnchor

})

const Map = () => {

  const {lat, lon} = useMapContext()
  
  function SetMapComponent() {
    const map = useMap()
    map.setView([lat, lon], map.getZoom())
    useMapEvent('click', () => {
      map.setView([lat, lon], map.getZoom())
    })
        

    return (
      <>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]} icon={markerMapIcon}>
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