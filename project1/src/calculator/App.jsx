import React, { useState } from "react";
import "./Style.css"
function App (){
    const [num,setnumber]=useState("")
    return(
        <div>
            <div className="title">
                <h1>Clculator</h1>
            </div>
            <div className="calc">
            <div>
            <input type="text" placeholder="0" disabled value={num}/>
            </div>
        <div>
        <button id="ac" onClick={(x)=>{setnumber("")}}>AC</button>
        <button id="del" onClick={(x)=>{setnumber(num.slice(0.-1))}}>DEL</button>
        <button id="%" onClick={(x)=>{setnumber(num + x.target.id)}}>%</button>
        <button id="/" onClick={(x)=>{setnumber(num + x.target.id)}}>/</button>
        </div>
        <div>
        <button id="7" onClick={(x)=>{setnumber(num + x.target.id)}}>7</button>
        <button id="8" onClick={(x)=>{setnumber(num + x.target.id)}}>8</button>
        <button id="9" onClick={(x)=>{setnumber(num + x.target.id)}}>9</button>
        <button id="*" onClick={(x)=>{setnumber(num + x.target.id)}}>x</button>
        </div>
        <div>
        <button id="4" onClick={(x)=>{setnumber(num + x.target.id)}}>4</button>
        <button id="5" onClick={(x)=>{setnumber(num + x.target.id)}}>5</button>
        <button id="6" onClick={(x)=>{setnumber(num + x.target.id)}}>6</button>
        <button id="-" onClick={(x)=>{setnumber(num + x.target.id)}}>-</button>
        </div>
        <div>
        <button id="3" onClick={(x)=>{setnumber(num + x.target.id)}}>3</button>
        <button id="2" onClick={(x)=>{setnumber(num + x.target.id)}}>2</button>
        <button id="1" onClick={(x)=>{setnumber(num + x.target.id)}}>1</button>
        <button id="+" onClick={(x)=>{setnumber(num + x.target.id)}}>+</button>
        </div>
        <div>
        <button id="0" onClick={(x)=>{setnumber(num + x.target.id)}}>0</button>
        <button id="00" onClick={(x)=>{setnumber(num + x.target.id)}}>00</button>
        <button id="." onClick={(x)=>{setnumber(num + x.target.id)}}>.</button>
        <button id="=" onClick={(x)=>{setnumber(eval(num))}}>=</button>
        </div>
        </div>
        </div>
    )
}
export default App;