import Header from './components/Header'
import Info from './components/Info'
import { useState, useEffect} from 'react'
import axios from 'axios'
import Map from './components/Map'
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
  const [error, setError] = useState(false)

  const { fetchMap } = useMapContext()

  const getData = (ip:string) => {
    setLoading(true)
      axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}&ipAddress=${ip}`)
        .then((res)=>{
          if(res.data.location.country != "ZZ"){
            setIp(res.data.ip)
            
            setLocation(res.data.location)
            
            setTimezone(res.data.location.timezone)
            setIsp(res.data.isp)
            setLoading(false)
          } else {
            setLoading(false)
            setError(true)
            console.log(error)
          }
        })
        .catch((err) => {
          console.log(err)
          setLoading(false)
          setError(true)
          setTimeout(() => {
            setError(false)
            setIp("")
          }, 2000)
        })
        console.log(location)
  }
  useEffect(()=>{
    getData("")
    fetchMap(location)
  }, [])

  useEffect(() => {
    fetchMap(location)
  }, [timezone])
    
  return (
    <div className='App'>
          <Header/>
          <Info ip={ip} location={location} timezone={timezone} isp={isp} loading={loading} getData={getData} setIp={setIp} error={error}/>
          <Map />
    </div>
  )
}

export default App