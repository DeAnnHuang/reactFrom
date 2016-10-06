import React, { Component } from 'react';


export default class SecurityCode extends Component {

	constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
        
        this.state = {
          style:{
          	opacity: '0.6'
          },
          createPassword: this.generateSecurityCode(),
        }
       
    }
    
    handleClick(){
    	this.setState({
    		style:{
	            transform: 'rotate(' + (Math.floor(Math.random() * 360)) + 'deg)',
	            transformOrigin: 'center',
	            transition: 'all 0.8s',
	            opacity: '0.6'
	        },
	        createPassword: this.generateSecurityCode()
	    });
    }

	generateSecurityCode() {
        const seed = new Array('2', '3', '4', '5', '6', '7', '8', '9',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ); //數組
        const seedlength = seed.length; //數組長度
		let createPassword = '';	
        for (let i = 0; i < 6; i++) {
            let j = Math.floor(Math.random() * seedlength);
           	createPassword += seed[j];
        }
        return createPassword;
    }

	render() {

		return (
			<div className="col-md-6">

				<span className="scode" id="scode" style={{color:'red'}}>{this.state.createPassword}</span>

				<img src="http://www.myiconfinder.com/uploads/iconsets/20-20-a8b2cd367864cc15d5a376893517ec81-arrow.png"
        	     style={this.state.style}
        	     onClick={this.handleClick} />
			</div>
		);
	}
}
