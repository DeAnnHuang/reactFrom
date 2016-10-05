import React, { Component } from 'react';
import Label from './Label';

export default class InputName extends Component {
	render() {
		return (
			<div>
				<Label name="收件姓名"/>
	            <input type="text" 
	            	   name="name" 
	            	   className="form-control" 
	            	   required />
            </div>
		);
	}
}
