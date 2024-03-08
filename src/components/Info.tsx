import { Input } from './Input'
import info from '../types/info'

const Info = ({ ip, location, isp, timezone, loading, getData, setIp, error }: info) => {

    return (
        <section className='w-5/6 m-auto flex flex-col gap-4 centerInfo md:max-w-[850px]'>

            <Input getData={getData} setIp={setIp} ip={ip} />
            <ul className='bg-white rounded-2xl flex flex-col gap-4 items-center justify-center p-5 min-h-[300px] md:flex-row md:min-h-[150px] md:gap-1 md:justify-around md:p-0'>
                {loading ?
                    <span className="loading loading-spinner loading-lg"></span>
                    : error ?
                        <div role="alert" className="flex flex-col justify-center items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className='text-red-600 text-lg text-center'>Não foi possível encontrar esse endereço IP</span>
                        </div>
                        :
                        <>
                            <li>
                                <h2 className='text-xs font-bold text-very-dark-gray text-center'>IP ADDRESS</h2>
                                <p className='text-center font-bold text-lg'>{ip}</p>
                            </li>
                            <span className=' hidden divider'></span>
                            <li>
                                <h2 className='text-xs font-bold text-very-dark-gray text-center'>LOCATION</h2>
                                <p className='text-center font-bold text-lg'>{`${location.region}, ${location.country}`}</p>
                            </li>
                            <span className=' hidden divider'></span>

                            <li>
                                <h2 className='text-xs font-bold text-very-dark-gray text-center'>TIMEZONE</h2>
                                <p className='text-center font-bold text-lg'>UTC{timezone}</p>
                            </li>
                            <span className=' hidden divider'></span>

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