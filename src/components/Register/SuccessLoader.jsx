import React from 'react'
import loader from '../../assets/Doormut-icon.svg'
 export default function DataLoader() {
  
  return (
    <div className="h-[100vh] self-center fixed z-10  top-0 bottom-0 w-[100%] bg-[#0000003f] flex items-center justify-center">
      
      <div className='loader'>
        <img src={loader}  className=' w-[100%] '/>
      </div>

    </div>
  )
}
