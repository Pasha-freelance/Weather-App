import React, {useEffect} from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import errorImage from '../../Assets/frog.png'
import {animated, Transition} from "react-spring";
import {CustomButton} from "../StartPage/ChooseCityButton";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    tryAgainButton: {
        marginTop: '20px'
    },
    errorText: {
        width: '400px',
        height: '150px',
        transform: 'rotate(-5deg)',
        background: '#c0eef4',
        padding: '10px',
        borderRadius: '10px'
    },
    errorContent: {
        marginTop: '25px'
    },
    errorImage: {
        background: `url(${errorImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '500px',
        height: '400px'
    }
}))

const Error404 = () => {
    const classes = useStyles()
    const history = useHistory()
    const redirectToMainPage = () => history.push('/')

    useEffect(() => {
        return function () {
            redirectToMainPage()
        }
    }, [])

    return (
        <Grid container direction={'column'}>
            <Grid container
                  justifyContent={'space-around'}
                  alignItems={'center'}
                  className={classes.errorContent}>
                <Transition
                    items={true}
                    from={{transform: 'translateY(-200%)'}}
                    enter={{transform: 'translateY(0)'}}
                    config={{friction: 20, mass: 6.0, tension: 150}}
                >
                    {(styles) =>
                        <animated.div style={styles}>
                            <Grid item className={classes.errorText}>
                                Похоже что-то пошло не так :( <br/>
                                Скорее всего у нас нет данных для вашего города<br/>
                                Уже работаем над исправлением этого недоразумения<br/>
                                Приносим свои извинения за неудобства
                            </Grid>
                        </animated.div>
                    }
                </Transition>
                <Grid item className={classes.errorImage}/>
            </Grid>
            <Grid item>
                <CustomButton className={classes.tryAgainButton}
                              variant={'contained'}
                              color={'primary'}
                              onClick={redirectToMainPage}>Попробовать еще раз</CustomButton>
            </Grid>
        </Grid>
    );
};

export default Error404;