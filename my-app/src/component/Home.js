import React, { Component } from "react";
import { Button } from 'primereact/button';

import './view.css'
// import background from './imagini/background.jpg'



export class Home extends Component{
    
    constructor(props) {
       
        super(props)
        this.state = {
            loading1: false,
            loading2: false
        }}
        render(){
            return(
                
                <div className=" button-demo">
                    {/* <div>
                        <img src={background} alt="this is background"></img>
                    </div> */}
                    <div className="card">
                    <h3>Alege tipul logarii</h3>
                    <Button label="Profesor" className="p-button-text" />
                    <Button label="Student" className="p-button-text"/>
                    
                    
                    </div>
                </div>
                

            )
        }

}
export default Home;