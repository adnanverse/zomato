import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Home from './component/Home';
import Commonroute from './component/Commonroute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Commonroute/>} >
    <Route path='/' element={<Home/>}></Route>
    </Route>
     

    </>
  )

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
