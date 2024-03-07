type MapContextType = {
    lat:Number,
    setLat:React.Dispatch<React.SetStateAction<number>>,
    lon:Number,
    setLon:React.Dispatch<React.SetStateAction<number>>,
    handleSetMap: (lat: number, lon: number) => void
  }

  export default MapContextType