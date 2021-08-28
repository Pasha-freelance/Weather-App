import React from 'react';
import {Grid} from "@material-ui/core";
import FeatureCard from "./FeatureCard/FeatureCard";

const getCloudiness = clouds => {
    if (clouds === 0) return 'Безоблачно'
    if (clouds >= 1 && clouds <= 50) return "Небольшая"
    return "Высокая"
}

const getWindiness = speed => {
    speed = parseInt(speed)
    if (speed >= 0 && speed <= 5) return "Слабый"
    if (speed >= 6 && speed <= 14) return "Умеренный"
    if (speed >= 25) return "Сильный"
}

const FeatureCardsList = ({about, wind, clouds}) => {
    const temperature = parseInt(about.temp)
    const feelsLike = parseInt(about.feels_like)
    const {humidity, pressure} = about
    return (
        <Grid container>
            <Grid container alignItems={'center'} justifyContent={'space-around'}>
                <FeatureCard title={'Температура'} info={temperature} addSign={<span>&#176;С</span>}/>
                <FeatureCard title={'Чувствуется'} info={feelsLike} addSign={<span>&#176;С</span>}/>
                <FeatureCard title={"Ветер"} info={getWindiness(wind.speed)}/>
                <FeatureCard title={"Облачность"} info={getCloudiness(clouds)}/>
            </Grid>
            <Grid container alignItems={'center'} justifyContent={'center'}>
                <FeatureCard title={"Влажность"} info={humidity} addSign={<span>%</span>}/>
                <FeatureCard title={"Давление"} info={pressure}
                             addSign={<span style={{fontSize: '15px'}}>мм.рт.ст</span>}/>
            </Grid>
        </Grid>

    );
}

export default FeatureCardsList