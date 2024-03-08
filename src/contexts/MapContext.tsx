import { createContext } from "react";
import React, { useContext, useState } from 'react';


type MapContextType = {
    lat:number,
    setLat:React.Dispatch<React.SetStateAction<number>>,
    lon:number,
    setLon:React.Dispatch<React.SetStateAction<number>>,
    fetchMap:(location: any) => Promise<void>
  }


const MapContext = createContext<MapContextType | undefined>(undefined);

type MapProviderProps = {
    children: React.ReactNode
}

const MapProvider = ({children} : MapProviderProps) => {
    const [lat, setLat] = useState(51.505)
    const [lon, setLon] = useState(-0.09)


    const fetchMap = async (location:any) => {
        try{
            const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${location.region}&format=json`);
            const data = await response.json();
            console.log(data)
            setLat(parseFloat(data[0].lat))
            setLon(parseFloat(data[0].lon))
        } catch(err) {
            console.log(err)
        }
        
      }

    return (
        <MapContext.Provider value={{lat, setLat, lon, setLon, fetchMap}}>
            {children}
        </MapContext.Provider>
    )
}

const useMapContext = () => {
    const context = useContext(MapContext)
    if(!context) {
        throw new Error('useMapContext deve ser usado dentro de um MapProvider')
    }
    return context
}

export { MapProvider, useMapContext }