import { StyleSheet } from "aphrodite";
import { 
    // std_bg, `
    white,
    primary,
    form_back,
    black, 
} from '../../../styles/colors/colors';
export const blogpost_styles = StyleSheet.create({
    main:{
        alignSelf: 'stretch',
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent: 'center',
        paddingTop:'70px',
        minHeight: '100vh',
        height: 'auto',
        width: '100%',
        background: black,
        // overflow: 'hidden',
    },
    blogpost_title:{textAlign:'center',color: primary, marginBottom:'20px'},
    tags:{
        margin:'15px 10%',
        display:'flex',
        minHeight:'20px',
        flexWrap:'wrap',
        alignSelf:'flex-start',
        flexDirection:'row',
        width:'80%', 
        maxWidth:'80%',
        justifyContent:'space-between',
        '@media screen and (max-width: 400px)':{
            width:'99%', 
            maxWidth:'99%',
            margin:'15px 1%',
        },
    },
    container:{
        width: '60%',
        backgroundColor: black,
        color: white,
        // display: 'grid',
        // flex: 1,
        // justifyItems: 'center',
        // gridTemplateColumns:'repeat(3, minmax( 33%, 220px))',
        // gridAutoRows:'minmax(220px, 220px)',
        // gridGap:'4px',
        // justifyContent:'space-evenly',
        // padding: '0 5px',
        '@media screen and (max-width: 900px)':{
            width: '90%',
            // gridTemplateColumns:'repeat(2, minmax( 50%, 220px))',
        },
        '@media screen and (max-width: 480px)':{
            width: '94%',
            // gridTemplateColumns: '100%',
        },
    },
    article:{
        height:'auto',
        width:'80%',
        display:'flex',
        backgroundColor: '#fefefe',
        color: black,
        paddingBottom:'20px',
        flexDirection:'column',
        alignItems:'center',
        padding:'1% 3%',
        '@media screen and (max-width: 600px)':{
            width: '98%',
            // gridTemplateColumns: '100%',
        }, 
    },
    
});