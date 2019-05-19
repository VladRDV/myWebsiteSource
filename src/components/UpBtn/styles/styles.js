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
export const up_style = StyleSheet.create({
    main:{
       position: 'fixed',
       bottom: '4vh',
       right: '3.5vw',
       backgroundColor: black,
       width: '60px',
       height: '60px',
       justifyContent: 'center',
       alignItems: 'center',
       textAlign:'center',
       color: white,
    //    borderRadius: '80px',
       border: `1px solid ${white}`,
       whiteSpace:'pre-wrap',
       textTransform: 'uppercase',
       fontSize: '1.2rem',
       ':hover':{
           color: black,
           backgroundColor: white
       },
    },
});