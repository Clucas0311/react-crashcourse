import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
	const onClick = () => console.log('Click');
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button onClick={onClick} color="green" text="Hello" />
		</header>
	);
};

Header.defaultProps = {
	title: 'Task Tracker'
};

Header.propTypes = {
	title: PropTypes.string.isRequired
};

export default Header;
