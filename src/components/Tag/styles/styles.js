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
} from '../../../styles/colors/colors';
    
export const tag_styles = StyleSheet.create({
    main:{
        display: 'inline-block',
        // backgroundColor: 'red',
        border: `1px solid`,
        borderRadius: '.5em 0',
        lineHeight: '.9rem',
        fontSize: '.8rem',
        padding: '2px 1.3%',
        width: 'auto',
        // color: black,
        minWidth: '19%',
        maxWidth: '56px',
        textOverflow: 'ellipsis',
        verricalAlign: 'middle',
        overflow:'hidden',
        textAlign: 'center',
        // alignItems:'center',
        margin:'0 1px 2px 0',
    },
});