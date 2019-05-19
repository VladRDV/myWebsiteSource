import React, { Component ,Fragment } from 'react';
import { navbar_styles as ns } from './styles/styles';
import { css } from 'aphrodite';
import { Link } from 'gatsby';
import Routes from '../../routes/routes'; 

class Navigation extends Component {
	constructor(props){
		super(props);
		this.state = {
		mobileNavigatorMode: false,
		}
		this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
		this.defineMobileNavStyles = this.defineMobileNavStyles.bind(this);
		this.defineMenuStyles = this.defineMenuStyles.bind(this);
		this.defineNavStyles = this.defineNavStyles.bind(this);
		this.linkNavToggle = this.linkNavToggle.bind(this);
	}
	toggleMobileMenu(){
		this.setState({ mobileNavigatorMode: !this.state.mobileNavigatorMode });
	}
	defineMobileNavStyles(){
		const { mobileNavigatorMode } = this.state;
		const mobileNavOpen = [ns.mobileNav, ns.menuStylerBg, ns.mobileNav_open],
			mobileNavClose = [ns.mobileNav, ns.menuStylerBg, ns.mobileNav_close];
		const s =  mobileNavigatorMode? mobileNavOpen : mobileNavClose;
		return css(...s);
	}
	defineMenuStyles(){
		const { mobileNavigatorMode } = this.state;
		const mobileMenuClose = [ns.mobileMenu, ns.mobileMenu_close],
			mobileMenuOpen = [ns.mobileMenu, ns.mobileMenu_open];
		const s =  mobileNavigatorMode? mobileMenuOpen : mobileMenuClose;
		return css(...s);
	}
	defineNavStyles(){
		const navHome = [ns.container, ns.menuStylerBg, ns.bgTrns],
			navStd = [ns.container, ns.menuStylerBg, ns.bgBlack];
		return this.props.location.pathname === '/'? css(...navHome) : css(...navStd);
	}
	linkNavToggle(link){
		const { location } = this.props;
		return location === link? this.toggleMobileMenu() : null;
	}
	render(){
		const home = [ns.btn, ns.btn_indigo],
			portfolio = [ns.btn, ns.btn_primary],
			blog = [ns.btn, ns.btn_success],
			about = [ns.btn, ns.btn_orange],
			contact = [ns.btn, ns.btn_warning];
		return (
		<Fragment>
			<nav className={`${this.defineNavStyles()}`}>
				<Link to={Routes.home} state={{terminalNoShow:true}} className={`normal_font ${css(...home)}`}>Home</Link>
				<Link to={Routes.portfolio} className={`normal_font ${css(...portfolio)}`}>Portfolio</Link>
				<Link to={Routes.blog} className={`normal_font ${css(...blog)}`}>Blog</Link>
				<Link to={Routes.about} className={`normal_font ${css(...about)}`}>About</Link>
				<Link to={Routes.contact} className={`normal_font ${css(...contact)}`}>Contact</Link>
			</nav>
			<nav className={`${this.defineMobileNavStyles()}`}>
				<div className={`${this.defineMenuStyles()}`}>
					<Link onClick={()=>this.linkNavToggle(Routes.home)} to={Routes.home} state={{terminalNoShow:true}} className={`normal_font ${css(ns.mobileMenuBtn)}`}>Home</Link>
					<Link onClick={()=>this.linkNavToggle(Routes.portfolio)} to={Routes.portfolio} className={`normal_font ${css(ns.mobileMenuBtn)}`}>Portfolio</Link>
					<Link onClick={()=>this.linkNavToggle(Routes.blog)} to={Routes.blog} className={`normal_font ${css(ns.mobileMenuBtn)}`}>Blog</Link>
					<Link onClick={()=>this.linkNavToggle(Routes.about)} to={Routes.about} className={`normal_font ${css(ns.mobileMenuBtn)}`}>About</Link>
					<Link onClick={()=>this.linkNavToggle(Routes.contact)} to={Routes.contact} className={`normal_font ${css(ns.mobileMenuBtn)}`}>Contact</Link>
				</div>
				<div className={`${css(ns.mobileMenuOpenerContainer)}`}>
					<button onClick={()=>this.toggleMobileMenu()} className={`${css(ns.mobileMenuOpener)}`}>Open menu</button>
				</div>
			</nav>
		</Fragment>
		);
	}
}
export default Navigation;
