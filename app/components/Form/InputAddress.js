import React, { Component } from 'react';
import Label from './Label';

export default class InputAddress extends Component {
	render() {
		return (
			<div>
				<Label name="寄送地址"/>
				<input type="text"
					   name="address" 
					   className="form-control" 
					   required />
			</div>	
		);
	}
}
