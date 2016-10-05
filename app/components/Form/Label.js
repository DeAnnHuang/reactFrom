import React, { PropTypes } from 'react';

const Label = ({name}) => (
    <label>
		<span style={{color: 'red'}}>*</span>
		{name}
	</label>
);

Label.propTypes = {
    name: PropTypes.string,
};

export default Label;
