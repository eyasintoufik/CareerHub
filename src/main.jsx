import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/statistics', 
        element: <Statistics></Statistics>
      },
      {
        path: '/applied', 
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=>fetch('../public/jobs.json') 
      },
      {
        path: '/blogs', 
        element: <Blogs></Blogs>
      },
      {
        path: '/jobs/:id', 
        element: <JobDetails></JobDetails>,
        loader: ()=>fetch('../jobs.json')
      },
    ]
    
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
