import React from 'react';
import { css } from 'aphrodite';
import Root from '../layout/Root/Root';
import { Link } from 'gatsby';
import Routes from '../routes/routes';
import { about_style as abs } from '../styles/page_styles/about_styles';
import me from '../../static/img/me.jpg';
export default ({ location }) => {
	return (
		<Root location={location}>
			<main className={`${css(abs.main)} normal_font`}>
				<div className={`${css(abs.container)}`}>
					<img className={`${css(abs.me)}`} src={me} alt="Vladimir Radovanovich"/>
					<p className={`${css(abs.txt)}`}>
						Hi there) 
						<br/>
						My name is Vladimir. 
						<br/>
						<br/>
						<span style={{fontWeight:'bold'}}>Who I am?</span>
						<br/>
						<br/>
						I'm a programmer and maker from Belgrade. 
						<br/>
						<br/>
						<span style={{fontWeight:'bold'}}>What I do?</span>
						<br/>
						<br/>
						While the base of my activity is Web-Development, I have a lot of hobbies, and from time to time I challenge myself in areas that share borders with what I usually do in order to keep an open the mind.
						<br/>
						I'm also a fond of learning.
						<br/>
						What can I say... keep the excitement coming by constantly seeking new knowledge and skills.
						<br/>
						<br/>
						<span style={{fontWeight:'bold'}}>What else?</span>
						I could go on and on about myself, beeing boring, but I think, that my <Link style={{color:'#fff'}} to={Routes.blog}>BLOG</Link> can give you a better idea of who I am
					</p>
                </div>
            </main>         
		</Root>
	)
}

// the fun version( 
	// easteregg(amall grey text in the corner),SW video intro as a background with nav still on screen and 'return to normal' button, ) 
// Star waRS
// intro CreatoR

// Right about now, in a galaxy, that is closer than you might think...

// Vladimir
// (or just vlad for short)

// That's me by the way.

// THE DUDE, THAT BUILDS STUFF

// So...I'm yet another legendary developer/maker/project hero from Belgrade. 
// With my awesome coding powers I create software, that protects citizens of the small provincial planet from bugs, repetitive work, more bugs  and inefficiency.
// In order to keep the Force strong within me I subject myself to the process of constant training and learning new skills, while sharpening the old ones, in the name of self-Improvement.
// My goal is to make my home planet a better place, to make it shine as the galaxie's greatest gem...