import { StyleSheet } from "aphrodite";
import { std_bg, white, warning, success, indigo } from '../../../styles/colors/colors';
const term_border = `1px solid ${white}`;
export const terminal_styles = StyleSheet.create({
    container:{
        background: std_bg,
        color: white,
        dispaly: 'flex',
       
        flexGrow: 1,
        border: term_border,
        flexDirection: 'column',
        height: '37vh',
        minWidth: '40vw',
        maxWidth:'600px',
        maxHeight:'300px',
        position:'fixed',
        // transition:'1.8s linear all',
        bottom: 0,
        zIndex: 5,
        "@media screen and (max-width: 600px)":{
            minWidth: '100vw',
            transition:'none',
        }
    },
    terminal_open:{
        // transition:'1.8s linear all',
        right: 0,
    },
    terminal_close:{
        right: '-200vh',
        transition:'1.8s linear all',
        opacity: 0,
        opinterEvents: 'none',
    },
    terminalTaskbar:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        minWidth:'100%',
        minHeight: '25px',
        padding: '0 5px',
        borderBottom: term_border,
    },
    terminalTaskbarBtn:{
        display:'inline-flex',
        // width:'3%',
        flex:'.03',
        // height:'100%',
        lineHeight: '1.4em',
        alignItems: 'center',
        cursor:'pointer',
    },
    fsIcon:{
        fontSize:'1.4em',
    },
    fsTitle:{
        fontSize:'.8em',
        letterSpacing:'2px',
        whiteSpace:'pre',
    },
    terminalViewportContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        overflowY:'auto',
    },
    terminalViewport:{
        width: '100%',
        height:'auto',
        padding:'6px',
        maxHeight:'100%',
        overflowY:'auto',
        wordWrap:'break-word',
        whiteSpace:'pre-wrap',
    },
    terminalMsgMe:{
        marginBottom:'5px',
        ":before":{
            content:"'<vlad_rdv>: '",
            color: warning,
        }
    },
    terminalMsgSystem:{
        marginBottom:'5px',
        ":before":{
            content:"'[ [SYSTEM] ]: '",
            color: success,
        }
    },
    terminalMsgDefault:{
        marginBottom:'5px',
        ":before":{
            content:"'<guest>: '",
            color: indigo,
        }
    },
});