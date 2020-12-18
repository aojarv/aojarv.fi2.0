import React from 'react';
import { Grid } from '@material-ui/core';

import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import antti from './Assets/antti.png';
import linkedin from './Assets/linked.png';
import github from './Assets/github.png';

const Container = styled(({ ...other }) => <Grid container={true} {...other} />)``;

const Item = styled(({ ...other }) => <Grid item={true} {...other} />)``;

/*
const StyledText = styled.div`
	width: 10vw;
	height: 10vh;
	font-size: auto;
	padding: 1rem;
	margin: 1rem;
	background-color: #057989;
	font-color: inherit;
`;
*/

const colorConfig = [
	{
		background: '#DABC69',
		container: '#649381',
		box: '#057989',
		font: '#190E09'
	},
	{
		background: '#6ABBBF',
		container: '#D29B31',
		box: '#923930',
		font: '#3A3734'
	},
	{
		background: '#F49A25',
		container: '#8A6D4C',
		box: '#B9341E',
		font: '#3F341E'
	},
	{
		background: '#C95848',
		container: '#4B9B45',
		box: '#185229',
		font: '#17100B'
	},
	{
		background: '#E3CAB2',
		container: '#E9D35C',
		box: '#76ABB1',
		font: '#424B4D'
	},
	{
		background: '#D6A045',
		container: '#9B9188',
		box: '#6882AD',
		font: '#514741'
	},
	{
		background: '#1F88A7',
		container: '#CF4487',
		box: '#8C1071',
		font: '#3B127B'
	},
	{
		background: '#84A7B9',
		container: '#CD8037',
		box: '#8C7F8A',
		font: '#53342C'
	},
	{
		background: '#F44050',
		container: '#C1202B',
		box: '#620A0D',
		font: '#140505'
	},
	{
		background: '#1C3344',
		container: '#7B999D',
		box: '#8C542C',
		font: '#141B21'
	}
];

const App = () => {
	const [ theme, setTheme ] = React.useState({});

	React.useEffect(() => {
		setTheme(colorConfig[Math.floor(Math.random() * colorConfig.length)]);
	}, []);

	const StyledText = styled.div`
		width: fit-content;
		height: fit-content;
		max-width: 15vw;
		min-width: 12rem;
		padding: 1rem;
		margin: 0.5rem;
		background-color: ${theme.box};
		border-radius: 0.5rem;
		font-size: 1.3rem;
	`;

	const StyledPic = styled.div`
		width: fit-content;
		height: fit-content;
		padding: 1rem;
		margin: 0.5rem;
		background-color: ${theme.box};
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
					backgroundColor: theme.background
				}}
			>
				<Item
					xs={8}
					style={{
						minHeight: '80vh',
						height: 'fit-content',
						backgroundColor: theme.container,
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
								color: theme.font
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
