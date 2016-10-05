import React, { Component } from 'react';
import Label from './Label';
import SecurityCode from './SecurityCode';

export default class InputSecurityCode extends Component {
	render() {
		return (
			<div>
				<Label name="驗證碼"/>
	            <div className="row">
	                <div className="col-md-6">
	                    <input type="text" name="scode" className="form-control" required />
	                </div>
	                <div className="col-md-6">
	                  
	                    <SecurityCode />
	    	            <img src="http://www.myiconfinder.com/uploads/iconsets/20-20-a8b2cd367864cc15d5a376893517ec81-arrow.png"
	          		         id="refresh"
	                	     style={{opacity: '0.6'}} />
	                </div>
	            </div>
	        </div>
		);
	}
}
