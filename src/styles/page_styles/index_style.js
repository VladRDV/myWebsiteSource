import { StyleSheet } from "aphrodite";
import { trns } from '../colors/colors';
const _olh900 = '@media screen and (orientation: landscape) and (max-height: 400px)';
export const index_style = StyleSheet.create({
    main:{
        flex: 1,
        flexBasis: 0,
        alignSelf: 'stretch',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        background: trns,
        // overflow: 'hidden',
        [_olh900]:{
            paddingTop:'30px'
        }
    },
    name: {
        height: 'auto',
        width: '90%',
        maxWidth: '460px',
        textAlign: 'center',
        padding: '12px 0',
        fontSize: '3.8rem',
        // wordWrap: 'break-word',
        whiteSpace:'pre-wrap',
        lineHeight: '1.5em',
        marginBottom: '20px',
        '@media screen and (max-width: 768px)':{
            fontSize: '2rem',
        },
        [_olh900]:{
            marginBottom:0
        }
    },
});