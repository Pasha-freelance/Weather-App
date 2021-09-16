import React from 'react';
import {Grid} from "@material-ui/core";
import FeatureCard from "./FeatureCard/FeatureCard";

const getCloudiness = clouds => {
    if (clouds === 0) return 'Without'
    if (clouds >= 1 && clouds <= 50) return "Small"
    return "Big"
}

const getWindiness = speed => {
    speed = parseInt(speed)
    if (speed >= 0 && speed <= 5) return "Without"
    if (speed >= 6 && speed <= 14) return "Moderate"
    if (speed >= 25) return "Strong"
}

const FeatureCardsList = ({about, wind, clouds}) => {
    const temperature = parseInt(about.temp)
    const feelsLike = parseInt(about.feels_like)
    const {humidity, pressure} = about
    return (
        <Grid container>
            <Grid container alignItems={'center'} justifyContent={'space-around'}>
                <FeatureCard title={'Temperature'} info={temperature} addSign={<span>&#176;С</span>}/>
                <FeatureCard title={'Feels like'} info={feelsLike} addSign={<span>&#176;С</span>}/>
                <FeatureCard title={"Wind"} info={getWindiness(wind.speed)}/>
                <FeatureCard title={"Clouds"} info={getCloudiness(clouds)}/>
            </Grid>
            <Grid container alignItems={'center'} justifyContent={'center'}>
                <FeatureCard title={"Humidity"} info={humidity} addSign={<span>%</span>}/>
                <FeatureCard title={"Pressure"} info={pressure}
                             addSign={<span style={{fontSize: '15px'}}>мм.рт.ст</span>}/>
            </Grid>
        </Grid>

    );
}

export default FeatureCardsList