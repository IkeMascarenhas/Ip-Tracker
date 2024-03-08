import React from 'react'
import arrow from '../img/icon-arrow.svg'
import InputMask from 'react-input-mask';

type InputProps = {
  getData: (ip: string) => void,
  setIp: React.Dispatch<React.SetStateAction<string>>,
  ip: string,
}

export const Input = ({getData, ip, setIp}: InputProps) => {

  return (
    <div className='flex w-[100%] mt-4
    h-14'>
        <input type="text" 
        placeholder={`Ex: 8.8.8.8`}
        className='w-[85%] rounded-l-2xl ml-[-1px] p-4 '
        value={ip}
        onChange={(e) => setIp(e.target.value)}
        />
        <button className='bg-black h-[100%] flex items-center justify-center w-[15%] rounded-r-2xl hover:cursor-pointer hover:bg-gray-900' onClick={() => {
          getData(ip);
          }}><img src={arrow} alt="Enviar"/></button>
    </div>
  )
}
