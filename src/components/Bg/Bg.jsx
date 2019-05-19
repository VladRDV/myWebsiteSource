import React from 'react';
import { css } from 'aphrodite';
import { bg_styles as bgs } from './styles/styles';
import { danger, success, warning, primary, indigo } from '../../styles/colors/colors'
const svg = [bgs.container];
const path = [bgs.path]
const Bg = () => (
	<svg xmlns="http://www.w3.org/2000/svg" className={`${css(...svg)}`}  version="1.1" x="0" y="0" viewBox="0 0 800 600" preserveAspectRatio="none">
		<defs>
			<path
				id="d1"
				fill="none"
				strokeWidth={2}
				strokeOpacity={.4}
				stroke="#222"
				d="M0 500h100l50 100"
			/>
			<path
				id="c1"
				fill="none"
				strokeWidth={2}
				className={`${css(...path, bgs.delay_20)}`}
				fillRule="evenodd"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeOpacity={1}
				strokeDasharray="1200 1200"
				strokeDashoffset={3000}
				stroke={danger}
				d="M0 500h100l50 100"
			/>
			<path
				id="d2"
				fill="none"
				strokeWidth={2}
				strokeOpacity={.4}
				stroke="#222"
				d="M800 500H700l-50 100"
				/>
			<path
				id="c2"
				fill="none"
				strokeWidth={2}
				className={`${css(...path, bgs.delay_12)}`}
				fillRule="evenodd"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeOpacity={1}
				strokeDasharray="1200 1200"
				strokeDashoffset={3000}
				stroke={primary}
				d="M800 500H700l-50 100"
			/>
			<path
				id="d3"
				fill="none"
				strokeWidth={2}
				strokeOpacity={.4}
				stroke="#222"
				d="M0 100h100L150 0"
			/>
			<path
				id="c3"
				fill="none"
				strokeWidth={2}
				className={`${css(...path, bgs.delay_16)}`}
				fillRule="evenodd"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeOpacity={1}
				strokeDasharray="1200 1200"
				strokeDashoffset={3000}
				stroke={indigo}
				d="M0 100h100L150 0"
			/>
			<path
				id="d4"
				fill="none"
				strokeWidth={2}
				strokeOpacity={.4}
				stroke="#222"
				d="M800 100H700L650 0"
			/>
			<path
				id="c4"
				fill="none"
				strokeWidth={2}
				className={`${css(...path, bgs.delay_26)}`}
				fillRule="evenodd"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeOpacity={1}
				strokeDasharray="1200 1200"
				strokeDashoffset={3000}
				stroke={warning}
				d="M800 100H700L650 0"
			/>
			<path
				id="eLeft"
				fill="none"
				strokeWidth={2}
				strokeOpacity={.4}
				stroke="#222"
        		d="M0 150l30 50v200L0 450"
			/>
			<path
				id="fLeft"
				fill="none"
				strokeWidth={2}
				className={`${css(...path, bgs.delay_22)}`}
				fillRule="evenodd"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeOpacity={1}
				strokeDasharray="1200 1200"
				strokeDashoffset={3000}
				stroke={success}
        		d="M0 150l30 50v200L0 450"
			/>
			<path
				id="eRight"
				fill="none"
				strokeWidth={2}
				strokeOpacity={.4}
				stroke="#222"
				d="M800 150l-30 50v200l30 50"
			/>
			<path
				id="fRight"
				fill="none"
				strokeWidth={2}
				className={`${css(...path, bgs.delay_10)}`}
				fillRule="evenodd"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeOpacity={1}
				strokeDasharray="1200 1200"
				strokeDashoffset={3000}
				stroke={success}
				d="M800 150l-30 50v200l30 50"
			/>
		</defs>
		<g fill="none" fillRule="evenodd">
			<use xlinkHref="#c1"/>
			<use xlinkHref="#d1"/>
			<use xlinkHref="#c2"/>
			<use xlinkHref="#d2"/>
			<use xlinkHref="#c3"/>
			<use xlinkHref="#d3"/>
			<use xlinkHref="#c4"/>
			<use xlinkHref="#d4"/>

			<use xlinkHref="#eLeft"/>
			<use xlinkHref="#fLeft"/>

			<use xlinkHref="#eRight"/>
			<use xlinkHref="#fRight"/>
		</g>
	</svg>
);

export default Bg;
// https://www.smooth-code.com/open-source/svgr/playground/
// 0,500   100,500 150,600 ----> c1 d1  bottom-left
// 800,500 700,500 650,600 ----> c2 d2  bottom-right
// 0,100   100,100 150,0   ----> c3 d3  top-left
// 800,100 700,100 650,0   ----> c4 d4  top-right 

// 0,150   30,200  30,400  0,450   ---->  eLeft fLeft
// 800,150 770,200 770,400 800,450 ---->  eRight fRight
