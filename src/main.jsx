import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomeWrapper from './components/HomeWrapper.jsx';
import WhoWeAre from './components/WhoWeAre.jsx';
import OurPrograms from './components/OurPrograms.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import GalleryPage from './components/GalleryPage.jsx';
import ReachUsPage from './components/ReachUsPage.jsx';


const router = createBrowserRouter([
  {path : "/", element : <App />, children : [
    {path : "/", element :  <HomeWrapper />},
    {path : "/who-we-are", element :  <WhoWeAre />},
    {path : "/our-programs", element :  <OurPrograms />},
    {path : "/projects", element :  <ProjectsPage />},
    {path : "/gallery", element :  <GalleryPage />},
    {path : "/reach-us", element :  <ReachUsPage />},
  ] }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
