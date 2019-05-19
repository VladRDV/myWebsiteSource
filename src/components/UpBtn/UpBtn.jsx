import React, { Component } from 'react'
import { css } from 'aphrodite';
import { up_style as ups } from './styles/styles';

class UpBtn extends Component {
    constructor(props){
        super(props);
        // this.state = {}
        this.goUp = this.goUp.bind(this);
    }
    goUp(){
        if(typeof window !== 'undefined' && (typeof document !== 'undefined')){
            document.getElementById('my_root').scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    }
    render(){
        const btn = (
            <button onClick={()=>this.goUp()} className={`${css(ups.main)}`}>
                {'Go\nUp'}
            </button>
        );
        switch(this.props.location.pathname){
            case '/portfolio': return btn;
            default: return null;
        }
    }
}

export default UpBtn
