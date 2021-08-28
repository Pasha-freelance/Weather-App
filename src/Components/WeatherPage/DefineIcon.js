import rainy from '../../Assets/rain.png'
import sun from '../../Assets/sun.png'
import clouds from '../../Assets/clouds.png'
import {Avatar, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    root:{
        width:'100px'
    }
}))

export const MainWeatherIcon = props => {

    const classes = useStyles()
    switch (props.weatherDescription) {
        case 'Clear':
            return <Avatar src={sun} alt={'sunny'} className={classes.root}/>
        case 'Clouds':
            return <Avatar src={clouds} alt={'cloudy'} className={classes.root}/>
        case 'Rain':
            return <Avatar src={rainy} alt={'rainy'} className={classes.root}/>
        default:
            return <Avatar/>
    }

}