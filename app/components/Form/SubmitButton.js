import React, { Component } from 'react';

export default class SubmitButton extends Component {
	render() {
		return (
			   <input  className="submit btn"
                       type='submit'
                       value="確認送出"
                       id="send" />
		);
	}
}
