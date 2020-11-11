import React from 'react'
import 'normalize.css'
// COMPONENTS
import Navbar from './Navbar'
import Footer from './Footer'

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div className="App">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
