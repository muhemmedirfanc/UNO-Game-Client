import React from 'react'
import useStyles from './styles'
import NotFoundSvg from '../../assets/images/NotFoundSvg.svg';

const NotFound = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src={NotFoundSvg} alt="" />
        </div>
    )
}

export default NotFound
