import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import WelcomeSection from './components/WelcomeSection.jsx'
import SignIn from './components/SignIn.jsx'
import ArticleContent from './components/article-components/ArticleContent.jsx'
import ArticlesList from './components/article-components/ArticleList.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path: '/', element: <WelcomeSection />},
      {path: 'contact', element: <Contact />},
      {path: 'articleslist', element: <ArticlesList />},
      {path: 'sign-in', element: <SignIn />},
      {path: 'article', element: <ArticleContent />}
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
