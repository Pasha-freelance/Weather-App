import React from 'react';
import {Card, makeStyles, Typography} from "@material-ui/core";
import {Transition, animated, config} from "react-spring";

const useStyles = makeStyles(theme => ({
    title: {
        marginBottom:'10px'
    },
    info: {
        fontSize:'30px',
        fontStyle:'italic'
    },
    image: {},
    card: {
        background: 'linear-gradient(90deg, #b9deed, #efefef)',
        margin: '10px',
        padding: '15px',
        height: '200px',
        minWidth: '220px',
        color:'#3F4E47'
    }
}))

const FeatureCard = ({title, info,addSign}) => {
    const classes = useStyles()
    return (
        <Transition
            items={true}
            from={{opacity: 0, scale: 0,}}
            enter={{opacity: 1, scale: 1}}
            config={{...config.wobbly, mass: 1.2, tension: 120}}
        >
            {(styles) =>
                <animated.div style={styles}>
                    <Card className={classes.card}>
                        <Typography variant={'h4'} className={classes.title}>{title}</Typography>
                        <Typography variant={'h4'} className={classes.info}>{info}{addSign}</Typography>
                    </Card>
                </animated.div>
            }
        </Transition>

    );
}

export default FeatureCard;