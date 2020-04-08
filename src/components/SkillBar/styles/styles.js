import { StyleSheet } from 'aphrodite';
import {
	// std_bg,
	white,
	trns,
	// danger,
	black,
	// read_back,
	form_back
} from '../../../styles/colors/colors';
export const skillbar_styles = StyleSheet.create({
	skill: {
		backgroundColor: form_back,
		position: 'relative',
		height: '24px',
		marginBottom: '8px',
		display: 'flex',
		alignItems: 'center',
		fontSize: '.75rem',
		fontWeight: 'bold',
		// lineHeight:'1.5em',
		justifyContent: 'space-between',
		width: 'calc(100% - 10px)',
		padding: '0 55px 0 0',
		// width:'100%',
		// maxWidth:'calc(100% - 19px)',
		borderRadiusTopRight: '150px'
	},
	skill_txt: {
		lineHeight: '1rem',
		verticalAlign: 'middle',
		zIndex: 100
	},
	skill_txt_bg: {
		padding: '0 5px',
		minWidth: '25%',
		backgroundColor: 'rgba(0,0,0,.14)',
		height: '100%',
		alignItems: 'center',
		display: 'flex'
	},
	skill_grade: {
		color: trns,
		animationFillMode: 'forwards',
		// animation: 'forwards',
		animationName: [
			{
				'0%': {
					color: form_back
				},
				'100%': {
					color: white
				}
			}
		],
		willChange: 'color',
		animationDuration: '2s'
	},
	square: {
		position: 'absolute',
		zIndex: '150',
		bottom: '-8px',
		// right: '10px',
		width: '2px',
		height: '150%',
		transform: 'rotate(-30deg)',
		backgroundColor: black
	},
	square_offset1: {
		right: '25px',
		width: '4px'
	},
	square_offset2: {
		right: '15px',
		width: '4px'
	},
	square_offset3: {
		right: '6px',
		width: '4px'
	},
	trapezoidBottom: {
		display: 'block',
		borderBottom: `7px solid ${black}`,
		borderLeft: '6px solid transparent',
		borderRight: '6px solid transparent',
		height: 0,
		width: '50px',
		position: 'absolute',
		zIndex: '150',
		bottom: '-3px',
		right: '-7px'
	},
	trapezoidTop: {
		display: 'block',
		borderTop: `7px solid ${black}`,
		borderLeft: '6px solid transparent',
		borderRight: '6px solid transparent',
		height: 0,
		width: '70px',
		position: 'absolute',
		zIndex: '150',
		top: '-4px',
		right: '-7px'
	},
	filler: {
		position: 'absolute',
		zIndex: 0,
		height: '100%',
		transition: '1s linear width',
		top: 0,
		left: 0
	}
	// triangle1:{
	//     position:'absolute',
	//     zIndex:'150',
	//     bottom: 0,
	//     right: 0,
	//     width: 0,
	//     height: 0,
	//     borderStyle: 'solid',
	//     borderWidth: '0 0 8px 8px',
	//     borderColor: `${trns} ${trns} ${black} ${trns}`,
	//     // borderStyle: 'inset',
	// },
	// triangle2:{
	//     position:'absolute',
	//     zIndex:'150',
	//     top: 0,
	//     right: 0,
	//     width: 0,
	//     height: 0,
	//     borderStyle: 'solid',
	//     borderWidth: '0 8px 6px 0',
	//     borderColor: `${trns} ${black} ${trns} ${trns}`,
	//     // borderStyle: 'inset',
	// },
});
