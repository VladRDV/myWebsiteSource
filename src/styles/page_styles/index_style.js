import { StyleSheet } from "aphrodite";
import { trns } from '../colors/colors';
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
    },
});