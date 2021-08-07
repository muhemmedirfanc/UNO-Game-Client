import React,{useState,useContext} from 'react'
import useStyles from './styles'
import { Button, Typography,TextField  } from '@material-ui/core'
import clsx from 'clsx';
import * as yup from 'yup';
import { useFormik } from 'formik';





import UnoLogo  from '../../assets/images/UnoLogo.svg'
import {  useHistory} from 'react-router-dom';
import { SocketContext } from '../../socketIO/socketIO';




const CreateRoom = () => {

    const classes = useStyles()
    const history = useHistory()
    const socket =  useContext(SocketContext)

   
    const [publicRoom, setPublicRoom] = useState(null);
    const [privateRoom, setPrivateRoom] = useState(null);
    const [noSlecetedRoomError,setNoSlecetedRoomError] = useState(false);
   
  

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

 
    console.log(socket.id)
  

        const validationSchema = yup.object({name:yup.string("Enter your name.").required("Name is required.")})

        const formik = useFormik({
            
            initialValues:{
                name:'',
            },
            validationSchema,
            onSubmit: (values)=>{
                
                    

                  if(!publicRoom && !privateRoom){
                     setNoSlecetedRoomError(true)
                  }else{
                      setNoSlecetedRoomError(false)
                      values.publicRoom = publicRoom
                      values.privateRoom = privateRoom
                      values.roomId = Math.random().toString().substring(13);
                      if(privateRoom){
                          values.roomPassword = Math.random().toString().substring(13);
                      }
                      console.log(values)
                     
                     socket.emit('create-room',values);

                     history.push(`/waiting-room?roomId=${values.roomId}&roomPassword=${privateRoom ? values.roomPassword:false}`);
                    


                  }
                   
            }
        })

    return (


        <div className={classes.root}>

          

            <div className={classes.container}>

                <div className={classes.logo}>
            <img src={UnoLogo} alt="" />
                </div>

            <div className={classes.welcomeTexts}>
                <Typography variant="h4" color="error" className={classes.welcomeText}>
                      Create
                </Typography>
                <Typography variant="h4" color="secondary" className={classes.welcomeText}>
                        Room
                </Typography>
         
            </div>

            {noSlecetedRoomError &&  
                    <Typography variant="h6" color="secondary" className={classes.welcomeText}>
                     SELECT ROOM TO CONTINUE
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
                     fullWidth
                     
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
              

<Button color="primary" variant="contained"  className={clsx(classes.button,classes.createButton)} fullWidth type="submit">
          CREATE
        </Button>

                    </div>

                  
                </form>
         

            </div>

            <div>
                
            </div>

        </div>
    )
}

export default CreateRoom
