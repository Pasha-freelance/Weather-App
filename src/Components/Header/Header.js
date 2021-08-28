import React from 'react';
import {AppBar, ButtonBase, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: 'rgb(82,82,82)',
        zIndex: 100,
    },
    margin: {
        marginLeft: theme.spacing(5)
    }
}))

const Header = () => {
    const classes = useStyles()
    const history = useHistory()
    const clickHandler = () => {
        history.block(true)
        history.push('/')
    }
    return (
        <AppBar position={'static'} className={classes.appBar}>
            <Toolbar>
                <ButtonBase className={classes.margin} onClick={clickHandler}>
                    <Typography variant={'h4'}>Weather</Typography>
                </ButtonBase>
            </Toolbar>
        </AppBar>
    );
};
export default Header;