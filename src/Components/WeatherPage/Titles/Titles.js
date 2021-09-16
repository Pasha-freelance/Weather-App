import React from 'react';
import {animated, Transition} from "react-spring";
import {Grid, makeStyles, Typography} from "@material-ui/core";
import {toUpperFirstLetter} from "../../../Utils/StringHelpers";
import {MainWeatherIcon} from "../DefineIcon";

const useStyles = makeStyles(theme => ({
    mainTitle: {
        color: '#1c313a'
    },
    weatherTitle:{
        color:'#ef1b1f'
    }
}))

export const MainTitle = ({cityName}) => {
    const classes = useStyles()
    return (
        <Transition
            items={true}
            from={{transform: 'translateX(-100%)'}}
            enter={{transform: 'translateX(0)'}}
            config={{friction: 50, mass: 2.0, tension: 90}}
        >
            {(styles) =>
                <animated.div style={styles}>
                    <Typography variant={'h2'}
                                align={'center'}
                                className={classes.mainTitle}>Now in {cityName} </Typography>
                </animated.div>
            }
        </Transition>
    );
};

export const WeatherTitle = ({description, iconDescription}) => {
    const classes = useStyles()
    return (
        <Transition
            items={true}
            from={{transform: 'translateX(100%)'}}
            enter={{transform: 'translateX(0)'}}
            config={{friction: 50, mass: 2.0, tension: 90}}
        >
            {(styles) =>
                <animated.div style={styles}>
                    <Grid container alignItems={'center'} justifyContent={'center'}>
                        <Typography variant={'h2'}
                                    align={'center'}
                                    className={classes.weatherTitle}>{toUpperFirstLetter(description)}</Typography>
                        <MainWeatherIcon weatherDescription={iconDescription}/>
                    </Grid>
                </animated.div>
            }
        </Transition>
    );
}


