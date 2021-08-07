import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';




function Spinner(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={35}
        thickness={6}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={35}
        thickness={6}
        {...props}
      />
    </div>
  );
}


export default Spinner