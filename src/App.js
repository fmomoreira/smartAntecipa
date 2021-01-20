import React, { Fragment } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'



import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
   
        <BrowserRouter>
          <Fragment>
              <Header />
              <Menu />
               
              <Footer />
          </Fragment>
        </BrowserRouter>

  )
}


export default  App;