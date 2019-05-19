import React from 'react'
import Root from '../layout/Root/Root';
// import { Link } from "gatsby";
import { contact_style as cs } from '../styles/page_styles/contact_style';
import { css } from 'aphrodite';
export default ({ location }) => {
  return (
    <Root location={location}>
      	<main className={`${css(cs.main)}`}>
			<div className={`${css(cs.container)} normal_font`}>
				<a  
					className={`${css(cs.contactLink, cs.border)}`} 
					target='_blank'
					rel="noopener noreferrer" 
					href='https://www.linkedin.com/in/vladimir-radovanovich-6a0313123/'
				>
					LinkedIn
				</a>
				{/* <a  
					className={`${css(cs.contactLink, cs.border)}`} 
					target='_blank'
					rel="noopener noreferrer" 
					href='https://www.linkedin.com/in/vladimir-radovanovich-6a0313123/'
				>
					GitHub
				</a>
				<a  
					className={`${css(cs.contactLink, cs.border)}`} 
					target='_blank'
					rel="noopener noreferrer" 
					href='https://www.linkedin.com/in/vladimir-radovanovich-6a0313123/'
				>
					GitLab
				</a> */}
				{/* <a  
					className={`${css(cs.contactLink, cs.border)}`} 
					target='_blank'
					rel="noopener noreferrer" 
					href='https://www.linkedin.com/in/vladimir-radovanovich-6a0313123/'
				>
					Facebook
				</a>
				<a  
					className={`${css(cs.contactLink, cs.border)}`} 
					target='_blank'
					rel="noopener noreferrer" 
					href='https://www.linkedin.com/in/vladimir-radovanovich-6a0313123/'
				>
					VKontakte
				</a>
				<a  
					className={`${css(cs.contactLink, cs.border)}`} 
					target='_blank'
					rel="noopener noreferrer" 
					href='https://www.linkedin.com/in/vladimir-radovanovich-6a0313123/'
				>
					Skype
				</a>
				<a  
					className={`${css(cs.contactLink, cs.border)}`} 
					target='_blank'
					rel="noopener noreferrer" 
					href='https://www.linkedin.com/in/vladimir-radovanovich-6a0313123/'
				>
					Skype
				</a>
				<a  
					className={`${css(cs.contactLink, cs.border)}`} 
					target='_blank'
					rel="noopener noreferrer" 
					href='https://www.linkedin.com/in/vladimir-radovanovich-6a0313123/'
				>
					Skype
				</a> */}
				<a  
					className={`${css(cs.contactLink, cs.border)}`} 
					rel="noopener noreferrer" 
					href='skype:live:bdbe9e31ce6eb136?chat'
				>
					Skype
				</a> 
				<div className={`${css(cs.emails, cs.border)}`}>
					<a href="mailto:vlad.radovanovich@gmail.com" className={`${css(cs.email)}`}>vlad.radovanovich@gmail.com</a>
					<a href="mailto:v.radovanovich@yahoo.com" className={`${css(cs.email)}`}>v.radovanovich@yahoo.com</a>
				</div>
			</div>
		</main>
    </Root>
  )
}
