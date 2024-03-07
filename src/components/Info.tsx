import { Input } from './Input'
import info from '../types/info'

const Info = ({ip, location, isp, timezone, loading, getData, setIp}:info) => {
    
  return (
    <section className='w-5/6 m-auto flex flex-col gap-6 centerInfo'>
    <Input getData={getData} setIp={setIp} ip={ip}/>
        <ul className='bg-white rounded-2xl flex flex-col gap-4 items-center justify-center p-5 min-h-[300px] md:flex-row md:min-h-[150px] md:gap-1 md:justify-around md:p-0'>
            {loading ? 
            <span className="loading loading-spinner loading-lg"></span> :
            <>
            <li>
                <h2 className='text-xs font-bold text-very-dark-gray text-center'>IP ADDRESS</h2>
                <p className='text-center font-bold text-lg'>{ip}</p>
            </li>
            <span className=' hidden md:divider'></span>
            <li>
                <h2 className='text-xs font-bold text-very-dark-gray text-center'>LOCATION</h2>
                <p className='text-center font-bold text-lg'>{`${location.region}, ${location.country}`}</p>
            </li>
            <span className=' hidden md:divider'></span>

            <li>
                <h2 className='text-xs font-bold text-very-dark-gray text-center'>TIMEZONE</h2>
                <p className='text-center font-bold text-lg'>UTC{timezone}</p>
            </li>
            <span className=' hidden md:divider'></span>

            <li className='flex flex-col items-center gap-1'>
                <h2 className='text-xs font-bold text-very-dark-gray text-center'>ISP</h2>
                <p className='text-center font-bold text-lg md:max-w-72'>{isp}</p>
            </li>
            </>
            }
            </ul>
            
    </section>
  )
}

export default Info