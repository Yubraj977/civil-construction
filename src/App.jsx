import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import Work from "./pages/Work"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Nav from "./pages/Nav"
import './App.css'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Nav />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='works' element={<Work />} />
      <Route path='contact' element={<Contact />} />

    </Route>
  )
)

function App() {
  return (
    <div  >

      <RouterProvider router={router} />

    </div>
  )
}

export default App
