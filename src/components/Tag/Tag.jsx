import React, { Component } from 'react';
import { css } from 'aphrodite';
import { tag_styles as tag } from './styles/styles';
import { black, white } from '../../styles/colors/colors';
const Tag = (props) => {
    return(
        <span 
            className={`${css(tag.main)}`} 
            style={{
                marginRight:`${props.isLast && (!props.is_on_black)? 0 : "2px"}`,
                color: props.is_on_black? white : black,
                backgroundColor: props.is_on_black? black : white,
                borderColor: props.is_on_black? white : black,
                // justifyContent: props.is_on_black? 'center' : 'none',
            }}
        >
            {props.txt}
        </span>
    );
}

export default Tag;