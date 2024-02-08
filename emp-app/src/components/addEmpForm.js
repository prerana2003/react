import { useEffect, useState } from 'react'
import './components.css'
import { Box, Button, Card, FormGroup, Grid, Typography } from '@mui/material'
import {TextField} from '@mui/material'
import {FormLabel} from '@mui/material'

const AddEmpForm = ({employees,selectedEmp,showForm,addEmployee,setShowform}) =>{
    let error
    let formobj = []
    for(let i=0;i<Object.keys(employees[0]).length;i++){
        if(Object.keys(employees[0])[i] !== "id" && Object.keys(employees[0])[i] !== "address" && Object.keys(employees[0])[i] !== "company"){
            formobj.push(Object.keys(employees[0])[i])
        }
    }

    
    let empObj = {}
    const [formState, setFormState] = useState(empObj)
    
    useEffect(()=>{
        for(let i=0;i<formobj.length;i++){
            empObj[formobj[i]] = ''
        }
        setFormState(empObj)
    },[showForm === "AddEmpForm"])
    
    
    useEffect(()=>{
            console.log("UpdateForm")
            for(let x in selectedEmp){
                empObj[x] = selectedEmp[x]
            }
            console.log("empobj ", empObj)
            setFormState(empObj)
            console.log("formState ",formState)
    },[showForm === "UpdateEmpForm"])
    
    // ----------------------------Add Employee Form-----------------------------
    let form = [];
    function createform(){
        for(let i=0;i<formobj.length;i++){
            form.push(
                <Grid direction='row' key={formobj[i]} sx={{display:'grid'}}>
                    <Grid sx={{width: 80, minWidth: 'fit-content'}}>
                        <FormLabel sx={{gridColumnStart:'1', gridColumnEnd:'2', fontSize:13}}>{formobj[i].charAt(0).toUpperCase()+formobj[i].slice(1)}</FormLabel>
                    </Grid>
                    <Grid>
                        {(showForm === "AddEmpForm")? 
                            <TextField sx={{gridColumnStart:'3', gridColumnEnd:'5'}} required placeholder={'Enter ' + formobj[i]} style={{marginBottom:'5px'}} size='small' onChange={(event)=>{{setFormState({...formState, [formobj[i]] : event.target.value})}}}/>
                        :   <TextField required placeholder={'Enter ' + formobj[i]} style={{marginBottom:'5px'}} size='small' value={formState[formobj[i]]} onChange={(event)=>{{setFormState({...formState, [formobj[i]] : event.target.value})}}}/>
                        }
                    </Grid>
                </Grid>
            )
        }
    }

    function validate(){
        let validated =true
        for(let i=0;i<formobj.length;i++){
            if(!formState[formobj[i]]){
                validated = false;
            }
        }
        return validated;
    }

    function afterValidationTrue(){
        addEmployee(formState)
        setFormState('')
        setShowform()
    }

    return(
        <Card id='addEmpForm' sx={{padding:'25px', paddingTop:'0px'}}>
            {(showForm === "AddEmpForm")? <Typography fontSize='x-large' color='white' bgcolor='navy' padding='10px' marginTop='15px'>Add Employee</Typography> : <h1 id='formTitle'>Update Employee</h1>}
            <form>
                <Grid container direction='column' justifyContent='space-around' alignItems='center'>
                    {createform()}
                    {form}
                    <Grid>
                        <Button variant='contained' id='submitBtn' type='submit' onClick={(event) =>{
                            {(validate()) ?
                                afterValidationTrue() : error = "error"
                            }}
                        } sx={{backgroundColor:'green', margin:'5px'}}>Submit</Button>
                        <Button sx={{margin:'5px'}} variant='contained' id='resetBtn' type='reset' onClick={() => { setFormState('')}}>Reset</Button>
                        <Button sx={{backgroundColor:'red', margin:'5px'}} variant='contained' id='cancelBtn' type='button'onClick={(event)=>setShowform()}>Cancel</Button>
                    </Grid>
                </Grid>
            </form>
        </Card>
    )
}

export default AddEmpForm;