import React, {useEffect, useState} from 'react';
import {getCurrentWeather} from "../../Api/Api";
import {Grid} from "@material-ui/core";
import FeatureCardsList from "./FeatureCardsList";
import Preloader from "../Preloader/Preloader";
import {MainTitle, WeatherTitle} from "./Titles/Titles";
import WeatherTooltip from "./Tooltips/Tooltips";
import {useHistory} from "react-router-dom";


const WeatherForecastPage = (props) => {

    const [data, setData] = useState('')
    const history = useHistory()
    const redirectToMainPage = () => history.push('/')
    const redirectToErrorPage = () => history.push('/error')

    useEffect(() => {
        (async function () {
            try {
                if (history.location.pathname === '/forecast' && props.city === '') {
                    redirectToMainPage()
                    return
                }
                const {data} = await getCurrentWeather.byName(props.city)
                setData(data)
            } catch (e) {
                redirectToErrorPage()
            }
        })()
    }, [])

    if (data) {
        const [aboutWeather] = data.weather
        return (
            <Grid container alignItems={'center'} justifyContent={'center'} direction={'column'}>

                <Grid item>
                    <MainTitle cityName={data.name}/>
                </Grid>

                <Grid item>
                    <WeatherTitle description={aboutWeather.description} iconDescription={aboutWeather.main}/>
                </Grid>

                <Grid item>
                    <FeatureCardsList about={data.main} clouds={data.clouds.all} wind={data.wind}/>
                </Grid>
                <WeatherTooltip weatherDescription={aboutWeather.main}/>
            </Grid>
        );
    } else return <Preloader/>
};

export default WeatherForecastPage;