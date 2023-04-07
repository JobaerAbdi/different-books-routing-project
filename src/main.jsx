import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Layout/Main'
import Home from './components/Home/Home'
import Books from './components/Books/Books'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'
import BookDetails from './components/BookDetails/BookDetails'
import ErrorPage from './components/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path : '/',
    element: <Main></Main>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element :<Home></Home>,
      },
      {
        path : '/books',
        element :<Books></Books>,
        loader : ()=> fetch('https://api.itbook.store/1.0/new')
      },
      {
        path : '/book/:bookId',
        element :<BookDetails></BookDetails>,
        loader : ({params})=> fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
      },
      {
        path : '/about',
        element :<About></About>,
      },
      {
        path : '/blogs',
        element :<Blogs></Blogs>,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
