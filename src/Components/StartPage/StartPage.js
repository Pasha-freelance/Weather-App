import React, {useState} from 'react';
import {Box, Grid, makeStyles} from "@material-ui/core";
import {Autocomplete} from '@material-ui/lab'
import {getMatchedCities} from "../../Utils/Filter";
import ChooseCityField from "./ChooseCityField";
import ChooseCityButton from "./ChooseCityButton";
import {animated, Transition} from "react-spring";
import sun from '../../Assets/sunOnMainPage.png'
import {useHistory} from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    wrapper: {
        height: 'calc(100vh - 64px)',//64px - header height
        padding: '0 12% 13%'
    },
    contentInner: {},
    title: {
        width: '400px',
        height: '380px',
        background: `url(${sun})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
}))


const StartPage = (props) => {
    const [citiesList, setCitiesList] = useState([])
    const [currentCity, setCurrentCity] = useState('')
    const [isUnknownCity, setIsUnknownCity] = useState(false)
    const history  = useHistory()
    const goToForecastPage = () => history.push ('/forecast')

    const classes = useStyles()

    const noOptionsText = currentCity.length < 3
        ? currentCity.length >= 1 ? "Продолжайте печатать..." : 'Начните печатать'
        : "Похоже такого города нет :("

    const submitHandler = (e) => {
        e.preventDefault()
        if (citiesList.includes(currentCity)) {
            props.chooseCity(currentCity)
            goToForecastPage()
        } else {
            setIsUnknownCity(true)
        }
    }
    const inputChangeHandler = newValue => {
        setCurrentCity(newValue)
        setCitiesList(getMatchedCities(newValue))
        if (isUnknownCity)
            setIsUnknownCity(false)
    }
    return (
        <Grid container alignItems={'center'} justifyContent={'space-between'} className={classes.wrapper}>
            <Transition
                items={true}
                from={{opacity: 0, transform: 'translateY(150%)'}}
                enter={{opacity: 1, transform: 'translateY(0)'}}
                config={{friction: 50, mass: 3.0, tension: 90}}
            >
                {(styles) =>
                    <animated.div style={styles}>
                        <form onSubmit={(e) => submitHandler(e)}>
                            <Grid item>
                                <Autocomplete
                                    options={citiesList}
                                    autoSelect={true}
                                    noOptionsText={noOptionsText}
                                    popupIcon={<></>}
                                    closeIcon={<></>}
                                    onInputChange={(e, newValue) => inputChangeHandler(newValue)}
                                    renderInput={params => <ChooseCityField params={params} error={isUnknownCity}/>}
                                />
                            </Grid>

                            <Grid item>
                                <ChooseCityButton/>
                            </Grid>
                        </form>
                    </animated.div>
                }
            </Transition>
            <Transition
                items={true}
                from={{opacity: 0, transform: 'translate(100%,-100%)'}}
                enter={{opacity: 1, transform: 'translate(0,0,0)'}}
                config={{friction: 50, mass: 3.0, tension: 90}}
            >
                {(styles) =>
                    <animated.div style={styles}>
                        <Box item className={classes.title}/>
                    </animated.div>
                }
            </Transition>
        </Grid>
    );
};
export default StartPage;