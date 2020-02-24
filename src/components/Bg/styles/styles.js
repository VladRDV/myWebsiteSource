import { StyleSheet } from 'aphrodite';
import {
	// std_bg,
	// white,
	trns
} from '../../../styles/colors/colors';
export const bg_styles = StyleSheet.create({
	container: {
		display: 'block',
		background: trns,
		overflow: 'hidden',
		position: 'absolute',
		height: '100vh',
		width: '100vw',
		zIndex: -1
	},
	path: {
		willChange: 'stroke-dashoffset',
		animationName: {
			'0%': {
				strokeOpacity: 0.8
			},
			'50%': {
				strokeDashoffset: 0,
				strokeOpacity: 1
			}
		},
		animationDuration: '20s',
		animationIterationCount: 'infinite',
		// animationDelay:'10s',
		animationTimingFunction: 'ease-in-out'
	},
	delay_10: {
		//
		animationDelay: '1s'
	},
	delay_12: {
		//
		animationDelay: '5s'
	},
	delay_16: {
		//
		animationDelay: '4s'
	},
	delay_20: {
		animationDelay: '2s'
	},
	delay_22: {
		//
		animationDelay: '6s'
	},
	delay_26: {
		//
		animationDelay: '2s'
	}
});
