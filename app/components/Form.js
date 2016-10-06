import React, { Component } from 'react';
import SubmitButton from './Form/SubmitButton';
import Label from './Form/Label';
import SecurityCode from './Form/SecurityCode';

export default class Form extends Component {
	render() {
		return (
			<form className="col-md-6">

					<Label name="收件姓名"/>
	            	<input type="text" 
	            	   	   name="name" 
	            	   	   className="form-control" 
	            	   	   required />

					<Label name="手機門號"/>
					<input type="tel" 
						   name="phone" 
						   pattern="[0]{1}[9]{1}[0-9]{8}" 
						   className="form-control" 
						   title="例如：0987654321" 
						   required />

					<Label name="寄送地址"/>
					<input type="text"
						   name="address" 
						   className="form-control" 
						   required />

					<Label name="驗證碼"/>
		            <div className="row">
		                <div className="col-md-6">
		                    <input type="text" 
		                    	   name="scode"
		                    	   className="form-control"
		                    	   required/>
		                </div> 
		               	<SecurityCode/>
		            </div>

					<SubmitButton />
			</form>
		);
	}
}

