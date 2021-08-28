import React from 'react';
import {Box, CircularProgress, makeStyles, Typography, withStyles} from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    wrapper:{
        height:"70vh",
        width:'100vw',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        position:'fixed'
    },
    text:{
        color:'white'
    }
}))
const CustomCircularProgress  = withStyles({
    colorPrimary:{
        color:'#e0f7fa'
    }
})(CircularProgress)

const Preloader = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <CustomCircularProgress size={60} color={'primary'}/>
            <Typography variant={'h5'} className={classes.text}>Подождите, мы ищем лучший прогноз</Typography>
        </Box>
    );
};

export default Preloader;