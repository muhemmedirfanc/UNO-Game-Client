import React,{useContext,useEffect} from 'react'
import useStyles from './style'
import UnoLogo from '../../assets/images/UnoLogo.svg'
import AstronautAnimation from '../animations/AstronautAnimation'
import JoinedOne from '../../assets/images/JoinedOne.svg'
import JoinedTwo from '../../assets/images/JoinedTwo.svg'
import JoinedThree from '../../assets/images/JoinedThree.svg'
import JoinedFour from '../../assets/images/JoinedFour.svg'
import { Button, Typography,IconButton } from '@material-ui/core'
import {Link, useLocation,useHistory} from 'react-router-dom'
import ShareIcon from '@material-ui/icons/Share';

import { useState } from 'react'
import { SocketContext } from '../../socketIO/socketIO'
import { WhatsappShareButton } from 'react-share'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';





const WaitingRoom = () => {

    const theme = useTheme();
    const socket = useContext(SocketContext)
    const history = useHistory()

    const xs = useMediaQuery(theme.breakpoints.down('xs'));



    //If user go back

    useEffect(() => {
        return () => {
       
          if (history.action === "POP") {
            socket.emit("leave-room")
          }
        };
      }, [history,socket])
    
    
   

    console.log(socket.id)

    let [users,setUsers] = useState([]);
    let [getUsers,setGetUsers] = useState(true)
    

 

    socket.on("join-room-response",(response)=>{
        console.log(response)
    })


    function useQuery(){
        return new URLSearchParams(useLocation().search)
    }

    const classes = useStyles()

    let query = useQuery();

    let roomId = query.get('roomId');
    let roomPassword = query.get('roomPassword');
    if(roomPassword === 'false') roomPassword = false

    console.log(roomId,roomPassword)
    
    socket.on("get-users-by-room",(users)=>{
        console.log(users)
        console.log("listen")
        setUsers(users);
    })
    
   
    let host = window.location.href.split('/')
    host.pop()
    host = host.join('/')
    host = host.toString()
    
    

if(getUsers){
    socket.emit('get-users-by-room',roomId)
    setGetUsers(false)
}

if(users.length >= 4){
    console.log('setTimer')
}


    return (
        <div className={classes.root}>



        <div className={classes.container}>

            <div className={classes.logo}>
        <img src={UnoLogo} alt="" />
            </div>

            <div className={classes.animation}>
              <AstronautAnimation width={xs ? '15.625rem': '31.25rem'} height='9.375rem'/>
            </div>
            
        <div className={classes.roomDetails}>
        <Typography variant="h6" color="textPrimary" className={classes.roomId} align="center" >
                    ROOM ID : {roomId}
                </Typography>

                {roomPassword &&(
                      <Typography variant="h6" color="primary" className={classes.roomPassword} align="center" >
                      PASSWORD : {roomPassword}
                  </Typography>
                )}
        </div>

        <div className={classes.joinedUsers} >

           

            <div>
                <img  className={classes.userSvg} src={JoinedOne} alt="" align='center'/>
                <Typography variant="h6" color="error" className={classes.useNameText}>
                {users[0] ? users[0].name : "Loading..."}
                </Typography>
            </div>

            <div>
                <img  className={classes.userSvg} src={JoinedTwo} alt="" align='center'/>
                <Typography variant="h6" color="secondary" className={classes.useNameText}>
                {users[1] ? users[1].name : "Loading..."}
                </Typography>
            </div>

            <div>
                <img  className={classes.userSvg} src={JoinedThree} alt="" align='center' />
                <Typography variant="h6" color="textPrimary" className={classes.useNameText}>
                {users[2] ? users[2].name : "Loading..."}
                </Typography>
            </div>

            <div>
                <img  className={classes.userSvg} src={JoinedFour} alt="" align='center' />
                <Typography variant="h6" color="primary" className={classes.useNameText}>
                {users[3] ? users[3].name : "Loading..."}
                </Typography>
            </div>

        </div>
            <div className={classes.buttons}>
            <Button className={classes.button} variant="contained" component={Link} to="/create-room" >
        START 
        </Button>

        <WhatsappShareButton url={`${host}/join-room?roomId=${roomId}&roomPassword=${ roomPassword}`} >
        <IconButton color="primary" aria-label="Share" component="span" className={classes.ShareIcon} onClick= {() => window.open(`${host}/join-room?roomId=${roomId}&roomPassword=${ roomPassword}`)}>
          <ShareIcon  />
        </IconButton>
        </WhatsappShareButton>

     
     
            </div>
      

          
        </div>
        </div>
    )
}

export default WaitingRoom
