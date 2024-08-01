import React, { Component } from "react";
import "./Home.css"
class Home extends Component{
    render(props){
        return(
            <section className="home">
            <div className="main">
                <h1>WHIPPED WONDER</h1>
                <h2>MELT YOUR WORRIES AWAY</h2>
                <h3>OUR FLAVORS :{this.props.flavors}</h3>
                <button className="btn btn-light">Menu</button>
            </div>
            </section>
        )
    }
}
export default Home