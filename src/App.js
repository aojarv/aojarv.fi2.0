import React from 'react';
import { Grid } from '@material-ui/core';

import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import antti from './Assets/antti.png';
import linkedin from './Assets/linked.png';
import github from './Assets/github.png';

import bg from './Assets/bg.gif';

const Container = styled(({ ...other }) => <Grid container={true} {...other} />)``;

const Item = styled(({ ...other }) => <Grid item={true} {...other} />)``;

const App = () => {
	const [ theme, setTheme ] = React.useState({});

	const StyledText = styled.div`
		width: fit-content;
		height: fit-content;
		max-width: 15vw;
		min-width: 12rem;
		padding: 1rem;
		margin: 0.5rem;
		border-radius: 0.5rem;
		font-size: 1.3rem;
	`;

	const StyledPic = styled.div`
		width: fit-content;
		height: fit-content;
		&:hover {
			transform: scale(1.05);
		}
		padding: 1rem;
		margin: 0.5rem;
		border-radius: 0.5rem;
	`;

	const items = [
		<StyledText style={{ fontSize: '2.6rem' }}>Antti Järveläinen</StyledText>,
		<StyledText>
			<FormattedMessage id="general" />
		</StyledText>,
		<StyledPic>
			<img style={{ width: '5rem', borderRadius: '0.25rem' }} src={antti} alt="Antti" />
		</StyledPic>,
		<StyledText>
			<FormattedMessage id="hobbies" />
		</StyledText>,
		<StyledText>
			<FormattedMessage id="coding_languages" />
		</StyledText>,
		<StyledText>
			<FormattedMessage id="languages" />
		</StyledText>,
		<StyledText>
			<FormattedMessage id="studies" />
		</StyledText>,
		<StyledText>
			<FormattedMessage id="it_skills" />
		</StyledText>,
		<StyledText>
			<FormattedMessage id="job" />
		</StyledText>,
		<StyledText>
			<FormattedMessage id="contact" />
		</StyledText>,
		<StyledPic>
			<a
				href="https://www.linkedin.com/in/antti-j%C3%A4rvel%C3%A4inen-48339919a/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img style={{ width: '5rem', borderRadius: '0.25rem' }} src={linkedin} alt="LinkedIn" />
			</a>
		</StyledPic>,
		<StyledPic>
			<a href="https://github.com/aojarv" target="_blank" rel="noopener noreferrer">
				<img style={{ width: '5rem', borderRadius: '0.25rem' }} src={github} alt="LinkedIn" />
			</a>
		</StyledPic>
	];

	return (
		<React.Fragment>
			<Container
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: '100vh',
					backgroundImage: `url(${bg})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}
			>
				<Item
					xs={8}
					style={{
						minHeight: '80vh',
						height: 'fit-content',
						borderRadius: '0.5rem',
						padding: '0.5rem',
						marginTop: '5rem',
						marginBottom: '5rem'
					}}
				>
					<Container>
						<Item
							xs={12}
							style={{
								display: 'flex',
								flexFlow: 'wrap',
								alignContent: 'flex-start',
								color: 'black'
							}}
						>
							{items.map((item) => item)}
						</Item>
					</Container>
				</Item>
			</Container>
		</React.Fragment>
	);
};

export default App;
