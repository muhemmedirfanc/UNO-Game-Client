import React from 'react'
import useStyles from './style'
import UnoLogo from '../../assets/images/UnoLogo.svg'
import AstronautAnimation from '../animations/AstronautAnimation'
import JoinedOne from '../../assets/images/JoinedOne.svg'
import JoinedTwo from '../../assets/images/JoinedTwo.svg'
import JoinedThree from '../../assets/images/JoinedThree.svg'
import JoinedFour from '../../assets/images/JoinedFour.svg'
import { Button, Typography } from '@material-ui/core'
import {Link} from 'react-router-dom'


const WaitingRoom = () => {

    const classes = useStyles()
    return (
        <div className={classes.root}>

        <div className={classes.container}>

            <div className={classes.logo}>
        <img src={UnoLogo} alt="" />
            </div>

            <div className={classes.animation}>
              <AstronautAnimation width='500px' height='200px'/>
            </div>
            
        <div className={classes.joinedUsers} >

            <div>
                <img className={classes.userSvg} src={JoinedOne} alt="" />
                <Typography variant="h6" color="error" className={classes.useNameText}>
                     Loading..
                </Typography>
            </div>

            <div>
                <img  className={classes.userSvg} src={JoinedTwo} alt="" />
                <Typography variant="h6" color="secondary" className={classes.useNameText}>
                     Loading..
                </Typography>
            </div>

            <div>
                <img  className={classes.userSvg} src={JoinedThree} alt="" />
                <Typography variant="h6" color="textPrimary" className={classes.useNameText}>
                     Loading..
                </Typography>
            </div>

            <div>
                <img  className={classes.userSvg} src={JoinedFour} alt="" />
                <Typography variant="h6" color="primary" className={classes.useNameText}>
                     Loading..
                </Typography>
            </div>

        </div>
            <div>
            <Button className={classes.button} variant="contained" component={Link} to="/create-room">
        START 
        </Button>
            </div>
      


        </div>
        </div>
    )
}

export default WaitingRoom
