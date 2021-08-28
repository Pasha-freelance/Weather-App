import React, {useState} from "react";
import StartPage from "./Components/StartPage/StartPage";
import WeatherForecastPage from "./Components/WeatherPage/WeatherForecastPage";
import Header from "./Components/Header/Header";
import {Route, Switch,} from "react-router-dom";
import Error404 from "./Components/ErrorsPages/Error404";
import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    app: {
        textAlign: 'center',
        background: 'linear-gradient(90deg, #1273de,#8ed1fc)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
    }
}))

export default function App() {
    const [chosenCity, setChosenCity] = useState('')
    const classes = useStyles()
    return (
        <Box className={classes.app}>
            <Header chooseCity={setChosenCity}/>
            <Switch>
                <Route exact path={'/'}>
                    <StartPage chooseCity={setChosenCity}/>
                </Route>
                <Route path={'/forecast'}>
                    <WeatherForecastPage chooseCity={setChosenCity} city={chosenCity}/>
                </Route>
                <Route>
                    <Error404/>
                </Route>
            </Switch>
        </Box>
    )
}

