import React, { Component } from 'react';
import InputName from './Form/InputName';
import InputNumber from './Form/InputNumber';
import InputAddress from './Form/InputAddress';
import InputSecurityCode from './Form/InputSecurityCode';
import SubmitButton from './Form/SubmitButton';

export default class Form extends Component {
	render() {
		return (
			<form className="col-md-6">
					<InputName />
					<InputNumber />
					<InputAddress />
					<InputSecurityCode />
					<SubmitButton />
			</form>
		);
	}
}

