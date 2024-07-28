import React from 'react'
import loader from '../../assets/Doormut-icon.svg'


export default function DataLoader() {
  return (
    <div className='h-[100%] w-[100%] flex items-center justify-center'>
      <div className='data_loader'>
        <img src={loader} className=' w-[100%] -mt-4 '/>
      </div>
    </div>
  )
}

