import { StyleSheet } from "aphrodite";
import { std_bg, white } from '../../../styles/colors/colors';
export const root_layout_styles = StyleSheet.create({
    root_std:{
        background: std_bg,
        color: white,
        dispaly: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        height: '100vh',
        minWidth: '100vw',
        position:'relative',
        zIndex: 0,
        overflowY: 'auto',
    },
});