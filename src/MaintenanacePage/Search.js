// have not used in project yet

import React from 'react'
import { Component } from 'react';

 class Search extends Component {

    constructor(props){
        super(props)

        this.state = {
            request: " "
        }
    }

    handleRequestChange =( event) =>{
        this.setState(
           { request: event.target.value}
        )
    }

     render (){
        return(
            <form>
                <div>
                <label>Your Maintenance Request</label>
                < input type = 'text' value = {this.state.request} onChange ={this.handleRequestChange}/>
                </div>
            </form>
        )

     }
     
 }

export default Search; 


