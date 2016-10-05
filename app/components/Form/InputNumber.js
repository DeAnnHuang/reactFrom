import React, { Component } from 'react';
import Label from './Label';

export default class InputNumber extends Component {
	render() {
		return (
			<div>
				<Label name="手機門號"/>
				<input type="tel" 
					   name="phone" 
					   pattern="[0]{1}[9]{1}[0-9]{8}" 
					   className="form-control" 
					   title="例如：0987654321" 
					   required />
			</div>	   
		);
	}
}
