import React from 'react';
import {Button, withStyles} from "@material-ui/core";


export const CustomButton = withStyles({
    root: {
        minWidth: '250px',
        padding: '20px',
        background: '#66bb6a',
        '&:hover': {
            background: 'white',
            '& .MuiButton-label': {
                color: 'black'
            }
        }

    },
    label: {
        color: '#f1f8e9',
    }
})(Button);

const ChooseCityButton = () => {
    return (
            <CustomButton type={'submit'}
                          variant={'contained'}
            >Show weather!</CustomButton>
    );
};

export default ChooseCityButton;