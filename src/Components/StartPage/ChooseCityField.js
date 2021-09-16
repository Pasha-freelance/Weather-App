import {TextField, withStyles} from "@material-ui/core";
import React from "react";

const CustomTextField = withStyles({
    root: {
        minWidth: '300px',
        '& label': {
            color: '#f5f5f5',
            '&.Mui-focused': {
                color: 'white'
            }
        },
        '& .MuiInput-underline': {
            '&:after,&:before': {
                borderBottomColor: '#efefef'
            },
            '&:hover': {
                '&:before': {
                    borderBottomColor: '#cfcfcf'
                }
            }
        },
        '& .MuiInputBase-input': {
            color: 'white',
            fontSize: '25px'
        }
    },
})(TextField);

const ChooseCityField = (props) => {
    return <CustomTextField
        {...props.params}
        fullWidth={false}
        margin={'normal'}
        label={'Choose your city from the list'}
        required={true}
        error={props.error}
        helperText={props.error ? 'Choose your city from the list' : ''}
    />
}
export default ChooseCityField