import React,{useState} from 'react'
import { TextField,Button,FormGroup,FormControlLabel,Checkbox, FormControl, InputLabel, Select, MenuItem, FormLabel, RadioGroup, Radio } from '@mui/material'

const Form1 = () => {
    const [inputs, setInputs] = useState({
        name:"",
        email:"",
        password:"",
        terms: false,
        courses:"",
        gender:"",
})
const changeFun = (e)=> {
    setInputs((prevState)=> ({
        ...prevState,
        [e.target.name]: [e.target.value],
    }))

}
const submitFun  = (e)=> {
    e.preventDefault()
    console.log(inputs)
}
  return (
 <>
<form className='form' onSubmit={submitFun}>
    <TextField name='name' type='text' 
    variant='outlined' 
    placeholder='Enter Name' 
    value={inputs.name}
    onChange={changeFun}>
    </TextField>
    <TextField name='email' type='email' autoComplete='off' variant='outlined' placeholder='Enter Email' value={inputs.email} onChange={changeFun}></TextField>
    <TextField name='password' type='password' variant='outlined' placeholder='Enter Password' value={inputs.password}
    onChange={changeFun}
    ></TextField>
    <FormGroup>
        <FormControlLabel label="I agree Term and Condition" 
        control={<Checkbox onChange={()=> setInputs(prevState=> ({
            ...prevState, terms: !inputs.terms
        })) }/>}/>
    </FormGroup>
    <FormControl>
        <InputLabel id= "menu">Courses</InputLabel>
            <Select id='menu-item' label="Courses" value={inputs.courses} onChange={changeFun} name='courses' >
                <MenuItem value={"mongodb"}>MongoDb</MenuItem>
                <MenuItem value={"reactjs"}>ReactJs</MenuItem>
                <MenuItem value={"nodejs"}>Nodejs</MenuItem>
                <MenuItem value={"nextjs"}>Nextjs</MenuItem>
            </Select>
    </FormControl>
    <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup className='radiogroup' name='gender' defaultValue={"male"} onChange={changeFun} row sx={{}}>
            <FormControlLabel value={"male"} label= "Male" control={<Radio/>} />
            <FormControlLabel value={"female"} label= "Female" control={<Radio/>} />
            <FormControlLabel value={"others"} label= "Others" control={<Radio/>} />
        </RadioGroup>
    </FormControl>
    <Button type='Submit' variant='contained' color='success'>Submit</Button>
</form>

 </>
  )
}

export default Form1