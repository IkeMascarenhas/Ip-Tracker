import Header from './components/Header'
import Info from './components/Info'
import { useState, useEffect, useContext} from 'react'
import axios from 'axios'
import Map from './components/Map'
import { useMap } from 'react-leaflet'
import { useMapContext } from './contexts/MapContext'


const App = () => {
  const API_KEY = 'at_OXsL3OgIZrqzZbSVvqgREaP8ewcTV'
  const [ip, setIp] = useState("")
  const [location, setLocation] = useState({
    country: "Brazil",
    region: "Barueri",
    timezone: ""
  })
  const [timezone, setTimezone] = useState("")
  const [isp, setIsp] = useState("")
  const [loading, setLoading] = useState(false)

  const { fetchMap } = useMapContext()

  const getData = (ip:string) => {
    setLoading(true)
      axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}&ipAddress=${ip}`)
        .then((res)=>{
          setIp(res.data.ip)
          setLocation(res.data.location)
          setTimezone(res.data.location.timezone)
          setIsp(res.data.isp)
          setLoading(false)
          fetchMap(location)
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
          setLoading(false)
        })
  }
  useEffect(()=>{
    getData("")
  }, [])
    
  return (
    <div className='App'>
          <Header/>
          <Info ip={ip} location={location} timezone={timezone} isp={isp} loading={loading} getData={getData} setIp={setIp} />
          <Map location={location}/>
    </div>
  )
}

export default App