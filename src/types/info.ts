type location = {
    country: string,
    region: string,
    timezone: string,
}

type info = {
    ip: string,
    location: location,
    timezone: string,
    isp: string,
    loading:boolean,
    getData: (ip: string) => void,
    setIp: React.Dispatch<React.SetStateAction<string>>,
}

export default info