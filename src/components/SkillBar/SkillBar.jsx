import React, { Component } from 'react';
import { css } from 'aphrodite';
import { skillbar_styles as sbs } from './styles/styles';
// import { read_back, white } from '../../styles/colors/colors';
class SkillBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            grade_line_width: '1%',
            grade_visible: false,
            timeout_id:'',
        };
        this.setGrade = this.setGrade.bind(this);
    }
    setGrade(){
        const { grade } = this.props;
        this.setState({grade_line_width: grade, grade_visible: true});
    }
    async componentDidMount(){
        const { num } = this.props;
        const timeout_id = setTimeout(() => {
            this.setGrade();
        }, 250 * num);
        await this.setState({timeout_id})
    }
    componentWillUnmount(){
        clearTimeout(this.state.timeout_id);
    }
    render(){
        const { num, grade, color, skill } = this.props;
        const { grade_line_width, grade_visible } = this.state;
        return (
            <li className={`${css(sbs.skill)}`}>
                <span className={`${css(sbs.skill_txt, sbs.skill_txt_bg)}`}>{skill}</span>
                <span 
                    className={`${css(sbs.skill_txt, sbs.skill_grade)}`}
                    style={{animationDelay: `${.3 * num}s`}}
                >
                    {grade}
                </span>
                <span className={`${css(sbs.square, sbs.square_offset1)}`}/>
                <span className={`${css(sbs.square, sbs.square_offset2)}`}/>
                <span className={`${css(sbs.square, sbs.square_offset3)}`}/>
                <span className={`${css(sbs.trapezoidBottom)}`}/>
                <span className={`${css(sbs.trapezoidTop)}`}/>
                <span className={`${css(sbs.filler)}`} style={{backgroundColor: color ,width: grade_line_width}}/>

                
                {/* <span className={`${css(sbs.triangle2)}`}/> */}
                {/* <span className={`${css(sbs.triangle1)}`}/> */}
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

export default SkillBar;