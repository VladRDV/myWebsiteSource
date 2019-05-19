import React, { Component } from 'react';
import { css } from 'aphrodite';
import { langbar_styles as lbs } from './styles/styles';
// import { read_back, white } from '../../styles/colors/colors';
class LangBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            grade_line_width: '1%',
            grade_visible: false,
        };
        this.setGrade = this.setGrade.bind(this);
    }
    setGrade(){
        const { grade } = this.props;
        this.setState({grade_line_width: grade, grade_visible: true});
    }
    // componentDidMount(){
    //     const { num } = this.props;
    //     setTimeout(() => {
    //         this.setGrade();
    //     }, 250 * num);
    // }
    render(){
        const { grade, color, lang } = this.props;
        // const { grade_line_width, grade_visible } = this.state;
        return (
            <li className={`${css(lbs.lang)}`}>
                <span className={`${css(lbs.lang_txt, lbs.lang_txt_bg)}`}>{lang}</span>
                <span 
                    className={`${css(lbs.lang_txt)}`}
                    // style={{animationDelay: `${.3 * num}s`}}
                >
                    {grade}
                </span>
                <span className={`${css(lbs.square, lbs.square_offset1)}`}/>
                <span className={`${css(lbs.square, lbs.square_offset2)}`}/>
                <span className={`${css(lbs.square, lbs.square_offset3)}`}/>
                <span className={`${css(lbs.trapezoidBottom)}`}/>
                <span className={`${css(lbs.trapezoidTop)}`}/>
                <span className={`${css(lbs.filler)}`} style={{backgroundColor: color ,width: '100%'}}/>

                
                {/* <span className={`${css(lbs.triangle2)}`}/> */}
                {/* <span className={`${css(lbs.triangle1)}`}/> */}
                {/* <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`${css(...svg)}`}  
                    version="1.1" 
                    x="0" y="0" 
                    viewBox="0 0 800 600" 
                    preserveAspectRatio="none"
                    >
                </svg> */}
            </li>
        );
    }
}

export default LangBar;