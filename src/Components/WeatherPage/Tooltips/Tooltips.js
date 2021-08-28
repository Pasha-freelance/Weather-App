import React, {useMemo, useState} from 'react';
import {Slide, Snackbar} from "@material-ui/core";

const getMessage = (weatherDescription) => {
    const getRandIndex = arr => (parseInt(Math.random() * 10)) % arr.length
    const tips = {
        Clear: [
            "Самое время прогуляться",
            "Кажется вы засиделись дома",
            "Отличный день для пикника",
            "Похоже сегодня ваш день"
        ],
        Clouds: [
            "Облака - не повод сидеть дома",
            "Посмотрите, какой чудесной формы облака сегодня",
            "Погодка просто шик",
            "Давайте вместе наблюдать за облаками :)"
        ],
        Rain: [
            "Самое время посмотреть хорошее кино",
            "Выпейте гарячего чаю :)",
            "Дождь - это так романтично",
            "Прогулки под дождем, что может быть лучше",
            "Без зонтика лучше не выходить"
        ]
    }
    const index = getRandIndex(tips[weatherDescription])
    return tips[weatherDescription][index]
}

const WeatherTooltip = React.memo(({weatherDescription}) => {
    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);
    const message = useMemo(() => getMessage(weatherDescription), [])
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            disableWindowBlurListener={true}
            open={open}
            autoHideDuration={4000}
            TransitionComponent={Slide}
            TransitionProps={{direction: 'right'}}
            transitionDuration={{
                appear: 500,
                enter: 500,
                exit: 500
            }}
            onClose={handleClose}
            message={message}
        />
    );
})

export default WeatherTooltip;