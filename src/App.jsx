import { useEffect, useState } from 'react'
import './App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import SubscribeCard from './constants/SubscribeCard'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import Navbar from './constants/Navbar'
import {Outlet, Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Footer from './constants/Footer'
import Error from './pages/ErrorPage'


export default function App(props) {
useEffect( () => {
Aos.init({
  duration: 1000,
})
}, []);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
    <Route path='/' element={<HomePage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='*' element={<Error />} />
    </Route>
  )
);

return (
  <>
 <RouterProvider router={router}/>
  </>
)
}

function Root () {

return(
<>
  <Outlet />
  <Footer />
</>
)

}

