import { StyleSheet } from "aphrodite";
import { 
    // std_bg,
    white,
    trns,
    // danger,
    form_back,
    read_back,
    black,
    std_bg,
} from '../colors/colors';
export const er_styles = StyleSheet.create({
    main:{
        alignSelf: 'stretch',
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent: 'center',
        paddingTop:'70px',
        textAlign:'left',
        minHeight: '100vh',
        height: 'auto',
        width: '100%',
        background: black,
        // overflow: 'hidden',
    },
    container:{
        width: '60%',
        // padding: '0 5px',
        display:'flex',
        whiteSpace:'pre-wrap',
        lineHeight:'2em',
        fontSize:'2.5rem',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        '@media screen and (max-width: 900px)':{
            width: '90%',
        },
        '@media screen and (max-width: 480px)':{
            width: '94%',
        },
    },
});