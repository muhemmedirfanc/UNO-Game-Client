import React,{useState,useContext} from 'react'
import useStyles from './styles'
import { Button, Typography,TextField  } from '@material-ui/core'
import clsx from 'clsx';
import * as yup from 'yup';
import { useFormik } from 'formik';


import UnoLogo  from '../../assets/images/UnoLogo.svg'
import { useHistory,useLocation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { SocketContext } from '../../socketIO/socketIO';




const JoinRoom = () => {

    function useQuery(){
        return new URLSearchParams(useLocation().search)
    }


    const classes = useStyles()
    const history =  useHistory()
    const socket = useContext(SocketContext)
    const query = useQuery();

    let roomId = query.get('roomId');
    let roomPassword = query.get('roomPassword');
    if(roomPassword === 'false') roomPassword = false
    
   


    const [publicRoom, setPublicRoom] = useState(null);
    const [privateRoom, setPrivateRoom] = useState(null);
    const [noSlecetedRoomError,setNoSlecetedRoomError] = useState(false);
    const [showJoinRoomError,setShowJoinRoomError] = useState(false);
    const [joinRoomErrorMessage,setJoinRoomErrorMessage] = useState('');
    const [loading,setLoading] = useState(false)


    


    const handleSetPublicRoom = ()=>{
        if(publicRoom){
            setPublicRoom(false)
        }else{
            setPublicRoom(true)
            setPrivateRoom(false)
        }
    }


    const handleSetPrivateRoom = ()=>{
        if(privateRoom ){
            setPrivateRoom(false)
        }else{
            setPrivateRoom(true)
            setPublicRoom(false)
        }
    }


    if(!privateRoom && !publicRoom){
        roomPassword ? setPrivateRoom(true) : setPublicRoom(true)
    }


    socket.on('connect',()=>{
        console.log(socket.id)
       
    })
    

        const validationSchema = yup.object({
            name:yup.string("Enter your name.").required("Name is required."),
            roomId:yup.string("Enter your room ID.").required("Room ID is required."),
            roomPassword:yup.string("Enter your room Password.")
           
        })

        const formik = useFormik({
            
            initialValues:{
                name:'',
                roomId:roomId ? roomId :'',
                roomPassword: roomPassword ? roomPassword :''


            },
            validationSchema,
            onSubmit: (values)=>{
              
                    setLoading(true)

                  if(!publicRoom && !privateRoom){
                     setNoSlecetedRoomError(true)
                  }else{
                      setNoSlecetedRoomError(false)
                      values.publicRoom = publicRoom
                      values.privateRoom = privateRoom    
                   
                   socket.emit('join-room',values);

                   socket.on("join-room-response",(response)=>{

                    setLoading(false)
                    
                    console.log(response)

                    if(response.status){
                        history.push(`/waiting-room?roomId=${values.roomId}&roomPassword=${privateRoom ? values.roomPassword:false}`);

                    }else{
                        setShowJoinRoomError(true)
                        setJoinRoomErrorMessage(response.error)
                        
                    }
                })
                   
                  }
                   
            }
        })

    return (


        <div className={classes.root}>

            { loading &&
                <div className={classes.spinner}>

                <Spinner/>
         </div>

            }



            <div className={classes.container}>

                <div className={classes.logo}>
            <img src={UnoLogo} alt="" />
                </div>

            <div className={classes.welcomeTexts}>
                <Typography variant="h4" color="error" className={classes.welcomeText}>
                      Join
                </Typography>
                <Typography variant="h4" color="secondary" className={classes.welcomeText}>
                        Room
                </Typography>
         
            </div>

            {noSlecetedRoomError &&  
                    <Typography variant="h6" color="secondary" className={classes.welcomeText}>
                     SELECT ROOM TYPE TO CONTINUE
                     </Typography>
                     }

                     {
                         showJoinRoomError &&
                         <Typography variant="h6" color="error" className={classes.welcomeText}>
                        {joinRoomErrorMessage}
                         </Typography>
                         
                     }

            <div className={classes.buttons}>
            <Button className={clsx(classes.button, classes.buttonOne) } variant="contained" disabled={publicRoom} onClick={handleSetPublicRoom} >
        PUBLIC
        </Button>

        <Button className={clsx(classes.button, classes.buttonTwo)} variant="contained" disabled={privateRoom} onClick={handleSetPrivateRoom} >
       Private
        </Button>
            </div>


            
         
           
                <form onSubmit={formik.handleSubmit} className={classes.form}>

                    <div className={classes.textfieldContainer}>

                    <TextField variant="outlined" 
                    className={classes.TextField} 
                   
                     id="name"
                     name="name"
                     label="Name"
                     InputProps={{
                      
                        classes:{
                            root:classes.input,
                            
                            
                        }
                    }}
                     placeholder="Enter Your Name."
                     value={formik.values.name}
                     onChange={formik.handleChange}
                     error={formik.touched.name && Boolean(formik.errors.name)}
                     helperText={formik.touched.name && formik.errors.name}
                     />
              
   <TextField variant="outlined" 
                    className={classes.TextField} 
                    
                     
                     id="roomId"
                     name="roomId"
                     label="Room ID"
                     InputProps={{
                      
                        classes:{
                            root:classes.input,
                            
                            
                        }
                    }}
                     placeholder="Enter Room Id."
                     value={formik.values.roomId}
                     onChange={formik.handleChange}
                     error={formik.touched.roomId && Boolean(formik.errors.roomId)}
                     helperText={formik.touched.roomId && formik.errors.roomId}
                     />
              
{
    privateRoom && (


        <TextField variant="outlined" 
        className={classes.TextField} 
         
         
         id="roomPassword"
         name="roomPassword"
         label="Room Password"
         InputProps={{
          
            classes:{
                root:classes.input,
                
                
            }
        }}
         placeholder="Enter Room Password."
         value={formik.values.roomPassword}
         onChange={formik.handleChange}
         error={formik.touched.roomPassword && Boolean(formik.errors.roomPassword)}
         helperText={formik.touched.roomPassword && formik.errors.roomPassword}
         />



    )
}

<Button color="primary" variant="contained"  className={clsx(classes.button,classes.createButton)} fullWidth type="submit">
         JOIN 
        </Button>

                    </div>

                   
    
                </form>
         

            </div>

            <div>
                
            </div>

        </div>
    )
}

export default JoinRoom
