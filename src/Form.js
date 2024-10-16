import React from 'react'
import { Typography,Button,TextField,AppBar,Toolbar } from '@mui/material';
import { Send } from '@mui/icons-material';



const Form = () => {
  return (
    <>
    {/* <AppBar>
      <Toolbar>
        <Typography variant='h4'>Logo</Typography>
        <Button variant='contained' color='success' sx={{marginLeft:"auto"}}>Signin</Button>
      </Toolbar>
    </AppBar> */}
         <Typography variant='h3' component={"h3"} color='primary' sx={{textAlign: "center",mt: 15}}>
      MUI Project
    </Typography>
    <Button variant='contained'color='success' sx={{margin: "30px", padding: "12px"}} onClick={() => alert("Done")}>First Btn
    </Button>
    <Button variant='text' size='medium' sx={{fontSize:"20px",border: "2px red solid",background:"red",color:"#ccc"}}>Text Btn</Button>
    <Button variant='contained' onClick={() => alert("Msg Send")} endIcon={<Send/>} sx={{margin:"12px",padding:"13px"}}>Send Msg</Button>
    {/* <LoadingButton loading variant ='contained' > Submit</LoadingButton> */}
    <TextField type='text' placeholder='Enter Name' variant='standard' sx={{marginTop:"30px"}}></TextField>
    <TextField type='text' placeholder='Enter Age' variant='filled' sx={{marginTop:"30px",margin:"10px"}}></TextField>


    </>
  )
}

export default Form