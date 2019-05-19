import React, { Component } from 'react'
import { css } from 'aphrodite';
import { root_layout_styles as rls } from './styles/styles';
import NavBar from '../../components/NavBar/NavBar';
import Terminal from '../../components/Terminal/Terminal'
// import UpBtn from '../../components/UpBtn/UpBtn'
import Bg from '../../components/Bg/Bg';
const _rls = [rls.root_std];
class Root extends Component {
	constructor(props){
		super(props);
		this.state = {
			// showTerminal: true,
		}
		this.restrictShowup = this.restrictShowup.bind(this);
		this.defineShowupPermission = this.defineShowupPermission.bind(this);
	}
	restrictShowup(){
		this.setState({
			showTerminal: false,
		});
	}
	defineShowupPermission(){
		const { location } = this.props;
		if(typeof location !== 'undefined'){
			if(typeof location.state !== 'undefined' && location.state !== null){
				return  !location.state.terminalNoShow 
			}else{
				return true;
			}
		}else{
			return true;
		}
	}
	render(){
		const {children, location} = this.props;
		return (
		<div id={'my_root'} className={`${css(..._rls)}`} style={{direction:'ltr'}}>
			<NavBar location={location}/>
			{location.pathname === '/' && <Bg/>}
			{children}
			{((location.pathname === '/') && this.defineShowupPermission()) && <Terminal restrictShowup={this.restrictShowup} location={location}/>}
			{/* <UpBtn location={location}/> */}
		</div>
		)
	}
}

export default Root
