import React from "react";
import { css } from 'aphrodite';
import { index_style as is } from "../styles/page_styles/index_style";
import Root from '../layout/Root/Root'
export default ({ location }) =>(
    <Root location={location}>
        <main className={`${css(is.main)}`}>
            <p className={`normal_font`}>Hello, my name is</p>
            <h1 className={`asteroids ${css(is.name)}`}>{'Vladimir\nRadovanovich'}</h1>
            <p className={`normal_font`}>Welcome to my online hideout</p>
        </main>
    </Root>
);
