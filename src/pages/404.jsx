import React from 'react'
import Root from '../layout/Root/Root'
import { css } from 'aphrodite';
import { er_styles as ers} from '../styles/page_styles/404_styles';
export default ({ location }) => {
return (
	<Root location={location}>
		<main className={`${css(ers.main)}`}>
			<div className={`${css(ers.container)} normal_font`}>
				{`404\nI've been looking everywhere, but found nothing :(`}
			</div>
		</main>
	</Root>
)
}
