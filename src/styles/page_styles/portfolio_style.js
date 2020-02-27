import { StyleSheet } from 'aphrodite';
import {
	// std_bg,
	white,
	// trns,
	// danger,
	black
	// read_back,
} from '../colors/colors';
export const portfolio_style = StyleSheet.create({
	main: {
		alignSelf: 'stretch',
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'center',
		paddingTop: '70px',
		minHeight: '100vh',
		// height: 'auto',
		height: '100%',
		width: '100%',
		background: black
		// overflow: 'hidden',
		// marginBottom:'50px',
	},
	container: {
		width: '68%',
		height: '100%',
		display: 'grid',
		color: white,
		// flex: 1,
		// justifyItems: 'center',
		gridTemplateColumns: 'repeat(4, minmax(25%, 220px))',
		gridAutoRows: 'repeat(5, minmax(20%, 220px))',
		gridGap: '10px',
		justifyContent: 'space-evenly',
		alignItems: 'stretch',
		'@media screen and (max-width: 900px)': {
			width: '90%'
		}
	},
	currently_learning: {
		gridRow: '1/3',
		gridColumn: '1/3',
		flexDirection: 'column',
		minHeight: '220px',
		alignItems: 'stretch',
		justifyContent: 'space-around',
		padding: '10px',
		'@media screen and (max-width: 600px)': {
			gridColumn: '1/5'
		}
	},
	border: {
		backgroundColor: black,
		border: `1px solid ${white}`
	},
	part_title: {
		marginBottom: '10px',
		minHeight: '19px'
	},
	projectsContainer: {
		// gridRow: '3/7',
		// height:'580px',
		gridRow: '3/8',
		gridColumn: '1/5',
		padding: '10px',
		'@media screen and (max-width: 600px)': {
			gridRow: '5/8'
		}
	},
	projectsTitle: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: '30px',
		width: '100%'
	},
	projects: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, minmax(220px, 50%))',
		gridAutoRows: 'repeat(2, minmax(220px, 50%))',
		gridGap: '10px',
		justifyContent: 'center',
		alignItems: 'stretch',
		height: 'auto',
		width: '100%',
		'@media screen and (max-width: 600px)': {
			gridTemplateColumns: '1fr'
		}
	},
	upperTxtFormat: {
		whiteSpace: 'pre-wrap',
		lineHeight: '1.4em',
		fontSize: '.9rem'
	},
	skills: {
		gridRow: '1/3',
		gridColumn: '3/5',
		padding: '10px',
		minHeight: '220px',
		position: 'relative',
		overflow: 'hidden',
		'@media screen and (max-width: 600px)': {
			minHeight: '220px',
			gridColumn: '1/5',
			gridRow: '3/5'
		}
	},
	scrollBarHider: {
		// position: 'absolute',
		// bottom: '-10px',
		// left: '15px',
		display: 'block',
		overflowY: 'scroll',
		overflowX: 'hidden',
		height: '100%',
		// paddingRight: '10px',
		// paddingLeft: '5px',
		overflow: 'hidden',

		width: '100%'
	},
	scrollBarHiderChild: {
		// https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll
		// neat trick
		width: '110%',
		height: '100%',
		overflowY: 'scroll',
		// paddingLeft: 0,
		// paddingRight: '1%' /* Increase/decrease this value for cross-browser compatibility */,
		boxSizing: 'content-box' /* So the width will be 100% + 17px */
		// '@media screen and (max-width: 1500px)': {
		// 	width: '110%'
		// }
	},
	skills_list: {
		width: '95%',
		maxWidth: '100%',
		height: 'auto',
		paddingBottom: '20px',
		'@media screen and (max-width: 1500px)': {
			width: '92.5%',
			paddingLeft: '2.5%'
		},
		'@media screen  and (max-width: 1000px)': {
			width: '100%',
			paddingLeft: 0
		}
	},

	gradient: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		zIndex: '1020',
		height: '20px',
		width: '100%',
		background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 10%,rgba(0,0,0,0.65) 82%,rgba(0,0,0,1) 99%)'
	}
});
