import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import WelcomeSection from './components/WelcomeSection.jsx'
import Articles from './components/Articles.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path: '/', element: <WelcomeSection />},
      {path: 'contact', element: <Contact />},
      {path: 'articles', element: <Articles />}
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
