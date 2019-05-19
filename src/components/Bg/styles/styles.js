import { StyleSheet } from "aphrodite";
import { 
    // std_bg,
    // white,
    trns 
} from '../../../styles/colors/colors';
export const bg_styles = StyleSheet.create({
    container:{
        display:'block',
        background: trns,
        overflow: 'hidden',
        position:'absolute',
        height: '100vh',
        width: '100vw',
        zIndex: -1,
    },
    path:{
        willChange: 'stroke-dashoffset',
        animationName: {
            "0%":{
                strokeOpacity:.8,
            },
            "50%":{
                strokeDashoffset: 0,
                strokeOpacity:1,
            },
        },
        animationDuration:'20s',
        animationIterationCount:'infinite',
        // animationDelay:'10s',
        animationTimingFunction: 'ease-in',
    },
    delay_10:{//
        animationDelay:'10s',
    },
    delay_12:{//
        animationDelay:'8s',
    },
    delay_16:{//
        animationDelay:'12s',
    },
    delay_20:{
        animationDelay:'14s',
    },
    delay_22:{//
        animationDelay:'18s',
    },
    delay_26:{//
        animationDelay:'16s',
    },

  
});