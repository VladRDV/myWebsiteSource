import { StyleSheet } from 'aphrodite';
import {
	// std_bg,
	white,
	// trns,
	// danger,
	form_back,
	// read_back,
	black
	// std_bg,
} from '../colors/colors';
export const blog_style = StyleSheet.create({
	main: {
		alignSelf: 'stretch',
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'center',
		paddingTop: '70px',
		minHeight: '100vh',
		height: 'auto',
		width: '100%',
		background: black
		// overflow: 'hidden',
	},
	container: {
		width: '60%',
		display: 'grid',
		// flex: 1,
		// justifyItems: 'center',
		gridTemplateColumns: 'repeat(3, minmax( 33%, 220px))',
		gridAutoRows: 'minmax(220px, 220px)',
		gridGap: '4px',
		justifyContent: 'space-evenly',
		// padding: '0 5px',
		'@media screen and (max-width: 900px)': {
			width: '90%',
			gridTemplateColumns: 'repeat(2, minmax( 50%, 220px))'
		},
		'@media screen and (max-width: 480px)': {
			width: '94%',
			gridTemplateColumns: '100%'
		}
	},
	blogLink: {
		display: 'inline-flex',
		flexDirection: 'column',
		alignItems: 'stretch',
		justifyContent: 'space-around',
		backgroundColor: white,
		// maxWidth:'33.3%',
		color: black,
		padding: '4% 5%',
		textDecoration: 'none',
		borderRadius: '.15em'
	},
	linkInfo: {
		height: '50%',
		maxWidth: '100%',
		// maxHeight:'100px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'stretch',
		justifyContent: 'space-around'
	},
	linkTitle: {
		color: black,
		fontWeight: 'bold',
		fontSize: '1.7rem',
		lineHeight: '1.1em',
		// whiteSpace: 'nowrap',
		// display:'block'
		position: 'relative',
		width: '100%',
		height: '3.3em',
		maxHeight: '50%',
		overflow: 'hidden',
		textOverflow: 'ellipsis'
	},
	linkDate: {
		fontSize: '.8rem',
		color: form_back,
		textAlign: 'right',
		height: '20px'
	},
	linkTags: {
		display: 'flex',
		justifyContent: 'flex-start',
		position: 'relative',
		height: '21px',
		overflowX: 'hidden',
		flexWrap: 'nowrap'
	},
	tagGrad: {
		position: 'absolute',
		display: 'inline-block',
		top: 0,
		right: 0,
		height: '100%',
		zIndex: 500,
		width: '30%',
		background: 'linear-gradient(right, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)'
	},
	titleGrad: {
		position: 'absolute',
		display: 'inline-block',
		bottom: 0,
		right: 0,
		height: '1.2em',
		zIndex: 500,
		width: '55%',
		background: 'linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 39%,rgba(255,255,255,1) 99%)'
	}
});
