
import { GoX } from 'react-icons/go';
import ToastContext from './ToastService';
import React,{useState} from 'react';

export default function ToastProvider({children}) {
const [toasts, setToasts] = useState([])

const open = (component, timeout = 3000) =>{
    const id = Date.now()
    setToasts(toasts => [...toasts, {id, component}])

    setTimeout(() => close(id), timeout)

    return id
}

const close =(id) => setToasts(toasts => toasts.filter((toast) => toast.id !== id))

  return (
   <ToastContext.Provider value={{open, close}}>
  {children}
  <div className=''>
 {toasts.map(({id,component}) => (
    <div key={id} className=" relative ">
    <button
    onClick={() => close(id)}
     className='absolute top-3 right-20 p-1 rounded-lg bg-gray-200/20 text-gray-800/60'>
     <GoX size={16} />
    </button>
    {component}
    </div>
 ))}
  </div>
   </ToastContext.Provider>
  )
}
