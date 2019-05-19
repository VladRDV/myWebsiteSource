	import React, { Component } from 'react';
	import { css } from 'aphrodite';
	import { terminal_styles as ts } from './styles/styles';

	class Terminal extends Component {
		constructor(props){
			super(props);
			this.state = {
				isOnscreen: true,
				messages : [
					{
						from: 'system',
						txt :  'Loading...',
					},
					{
						from: 'me',
						txt : 'Hi,I\'m glad you made it here. Feel free to look around :)'
					},
					// {
					//   from: 'me',
					//   txt : 'By the way, this website is new, so part of the content is still in development' 
					// }
				],
			}
			this.defineTermilalPosition = this.defineTermilalPosition.bind(this);
			this.toggleTerminal = this.toggleTerminal.bind(this);
			this.defineMsgStyle = this.defineMsgStyle.bind(this);
			this.renderMessages = this.renderMessages.bind(this);
		}
		toggleTerminal(){
			this.setState(
				{
					isOnscreen: !this.state.isOnscreen
				},
				// ()=>this.props.restrictShowup()
			);
		}
		defineTermilalPosition(){
			const open = [ts.container, ts.terminal_open],
						close = [ts.container, ts.terminal_close];
			if(this.state.isOnscreen){
				return css(...open);
			}
			return css(...close);
		}
		renderMessages(){
			// const messages = this.props.location === 'portfolio'? [{from:'me',txt:'Here you can have a look not only on projects I\'ve, but on other things  }] : this.state.messages;
			return this.state.messages.map(
				(el, ind)=>(
					<p id={`msg_${el.from}_${ind}`} key={`msg_${el.from}_${ind}`} className={`${this.defineMsgStyle(el.from)}`}>{el.txt}</p>
				)
			);
		}
		defineMsgStyle(sender, nik){
			switch(sender){
				case 'me': return css(ts.terminalMsgMe);
				case 'system': return css(ts.terminalMsgSystem);
				default: return css(ts.terminalMsgDefault);// later add entered nickname, when chat is ready
			}
		}
		render() {
			return (
				<aside className={`terminal ${this.defineTermilalPosition()}`}>
					<div className={`${css(ts.terminalTaskbar)}`}>
						<span onClick={()=>this.toggleTerminal()} className={`${css(ts.terminalTaskbarBtn, ts.fsIcon)}`}>&#9746;</span>
						<span className={`normal_font ${css(ts.terminalTaskbarBtn, ts.fsTitle)}`}>Terminal v0.1.2</span>
					</div>
					<div className={`${css(ts.terminalViewportContainer)}`}>
						<div className={`${css(ts.terminalViewport)}`}>
							{this.renderMessages()}
						</div>
					</div>
				</aside>
			)
		}
	}
	export default Terminal;