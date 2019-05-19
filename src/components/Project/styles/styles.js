import { StyleSheet } from "aphrodite";
import { 
    // std_bg,
    white,
    trns,
    // danger,
    black,
    read_back,
} from '../../../styles/colors/colors';
export const project_styles = StyleSheet.create({
    project:{
        minHeight:'220px',
        color: black,
        padding:'10px 0 10px 10px',
        backgroundColor: white,
        display:'flex',
        flex:1,
        flexDirection:'column',
        alignItems:'stretch',
    },
    ptoject_name:{
        fontSize: '.9rem',
        textTransform:'uppercase',
        flex: .2,
    },
    project_desc:{
        flex: .3,
        fontSize: '.9rem',
    },
    other_contributors:{
        fontSize: '.8rem',
        flex: .3,
        flexWrap:'wrap',
    },
    bottom:{
        flex: .2,
        justifyContent:'flex-end',
        paddingRight: 0,
        minHeight:'37px',
    },
    alignCenter:{
        display:'flex',
        alignItems:'center',
        paddingRight:'10px',
    },
    divider:{
        maxHeight: 0,
        borderBottom:'1px solid #000',
        borderTop:'none',
        borderLeft:'none',
        borderRight:'none',
        backgroundColor: trns, 
    },
    divider_1:{
        width:'50%',
        marginLeft:'50%',
    },
    divider_2:{
        width:'70%',
        marginLeft:'30%',
    },
    divider_3:{
        width:'50%',
        marginLeft:'50%',
    },
    to_project:{
        display:'inline-flex',
        fontSize:'1rem',
        backgroundColor: black,
        textDecoration:'none',
        // transition:'1s ease-in-out all',
        justifyContent:'flex-start',
        color: white,
        flex: .2,
        padding:'8px 11px',
        ':hover':{
            backgroundColor: white,
            color: black,
            transition:'1s ease-in-out all',
            // borderBottom: `1px solid ${black}`,
            // borderTop: `1px solid ${black}`,
            // borderLeft: `1px solid ${black}`,
            // borderRight:'none',
        },
    },
    contributor:{
        marginLeft:'3px',
        color: black,
        fontStyle: 'italic',
        whiteSpace:'pre-wrap',
    },
});