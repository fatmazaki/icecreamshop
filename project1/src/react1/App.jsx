import { Component, useState } from 'react'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import React from 'react'

class App extends Component{
  state={
    flavors:8
  }
  render(){
    return(
      <div>
        <Header/>
        <Home flavors={this.state.flavors}/>
        <Footer/>
      </div>
    )
  }
}
export default App
