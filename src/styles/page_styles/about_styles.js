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
export const about_style = StyleSheet.create({
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
        '@media screen and (max-width: 900px)':{
            width: '90%',
        },
        '@media screen and (max-width: 480px)':{
            width: '94%',
        },
    },
    me:{
        width:'25%',
        minWidth:'220px',
        border:' 3px solid #fff',
        borderRadius: '70px 0',
        margin:'5px', 
        height:'auto', 
        float:'right',
        '@media screen and (max-width: 400px)':{
            float:'none', 
            width:'100%',
            margin: 0, 
        }
    },
    txt:{
        whiteSpace:'pre-wrap',
        // float: 'left', 
        lineHeight:'1.5em'
    }
});