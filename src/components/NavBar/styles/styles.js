import { StyleSheet } from 'aphrodite';
import {
	// std_bg,
	white,
	trns,
	danger,
	success,
	primary,
	warning,
	orange,
	black,
	indigo
} from '../../../styles/colors/colors';
const mobileMenuOpenerHeight = '40px';
const _br768 = '@media screen and (max-width: 768px)',
	_bg576_land = '@media screen and (max-width: 576px) and (orientation: landscape)';
export const navbar_styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'stretch',
		height: '60px',
		// overflowX: hidden;
		[_br768]: {
			display: 'none'
		}
	},
	bgTrns: {
		background: trns
	},
	bgBlack: {
		background: black
	},
	menuStylerBg: {
		width: '100%',
		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: 1000
	},
	btn: {
		display: 'flex',
		backgroundColor: trns,
		cursor: 'pointer',
		fontSize: '1.1rem',
		fontWeight: '400',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: '12.25%',
		border: '1px solid',
		textDecoration: 'none',
		color: white,
		borderColor: trns,
		transition: '.8s ease-in-out all',
		':hover': {
			borderColor: white
		}
	},
	mobileNav: {
		flexDirection: 'column',
		alignItems: 'stretch',
		overflowY: 'hidden',
		justifyContent: 'flex-start',
		display: 'none',
		transition: '.8s background-color',
		[_br768]: {
			display: 'flex'
		}
	},
	mobileNav_close: {
		backgroundColor: trns
	},
	mobileNav_open: {
		backgroundColor: black
	},
	mobileMenu: {
		display: 'flex',
		flex: 0.8,
		flexDirection: 'column',
		overflowY: 'hidden',
		backgroundColor: trns,
		alignItems: 'stretch',
		justifyContent: 'space-around',
		transition: '.7s',
		[_bg576_land]: {
			flexDirection: 'row'
		}
	},
	mobileMenu_close: {
		minHeight: 0,
		opacity: 0
	},
	mobileMenu_open: {
		minHeight: `calc(100vh - ${mobileMenuOpenerHeight})`,
		opacity: 1
	},
	mobileMenuBtn_open: {
		display: 'flex',
		flexGrow: 0.1,
		flexShrink: 0,
		overflowY: 'hidden',
		backgroundColor: trns,
		cursor: 'pointer',
		fontSize: '1.1rem',
		fontWeight: '400',
		justifyContent: 'center',
		// alignSelf:'stretch',
		alignItems: 'center',
		textDecoration: 'none',
		border: '1px solid',
		color: white,
		borderColor: trns,
		// [_bg576_land]:{
		'@media screen and (max-width: 475px) and (orientation: landscape)': {
			minWidth: '95px'
		}
	},
	mobileMenuBtn_close: {
		display: 'flex',
		flexGrow: 0.1,
		flexShrink: 0,
		overflowY: 'hidden',
		backgroundColor: trns,
		cursor: 'pointer',
		fontSize: '1.1rem',
		fontWeight: '400',
		justifyContent: 'center',
		// alignSelf:'stretch',
		height: 0,
		transition: '.8 height',
		alignItems: 'center',
		textDecoration: 'none',
		border: '1px solid',
		color: white,
		borderColor: trns
	},
	mobileMenuOpenerContainer: {
		display: 'flex',
		minHeight: mobileMenuOpenerHeight,
		alignItems: 'center',
		justifyContent: 'center'
	},
	mobileMenuOpener: {
		backgroundColor: white,
		// marginTop: '15px',
		alignSelf: 'center',
		borderRadius: '50px',
		border: `1px solid ${black}`,
		minWidth: '27%',
		justifyContent: 'center',
		alignItems: 'center',
		height: '32px',
		whiteSpace: 'nowrap',
		width: '100px'
	},
	btn_danger: {
		':hover': {
			backgroundColor: danger
		}
	},
	btn_white: {
		':hover': {
			backgroundColor: white,
			color: black
		}
	},
	btn_indigo: {
		':hover': {
			backgroundColor: indigo
		}
	},
	btn_success: {
		':hover': {
			backgroundColor: success
		}
	},
	btn_warning: {
		':hover': {
			backgroundColor: warning
		}
	},
	btn_primary: {
		':hover': {
			backgroundColor: primary
		}
	},
	btn_orange: {
		':hover': {
			backgroundColor: orange
		}
	}
});
