import React from 'react'
import useStyles from './styles'
import UnoLogo  from '../../assets/images/UnoLogo.svg'
import { Button, Typography } from '@material-ui/core'
import clsx from 'clsx';
import {Link} from 'react-router-dom'

const Home = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>

            <div className={classes.container}>

                <div className={classes.logo}>
            <img src={UnoLogo} alt="" />
                </div>

            <div className={classes.welcomeTexts}>
                <Typography variant="h4" color="error" className={classes.welcomeText}>
                        Welcome
                </Typography>
                <Typography variant="h4" color="secondary" className={classes.welcomeText}>
                        to
                </Typography>
                <Typography variant="h4" color="textPrimary" className={classes.welcomeText}>
                        uno
                </Typography>
                <Typography variant="h4" color="primary" className={classes.welcomeText}>
                        online
                </Typography>
            </div>

        <Button className={classes.button} variant="contained" component={Link} to="/create-room">
        CREATE ROOM
        </Button>

        <Button className={clsx(classes.button, classes.buttonTwo)} variant="contained" >
        Join room
        </Button>


            </div>

            <div>
                
            </div>

        </div>
    )
}

export default Home
