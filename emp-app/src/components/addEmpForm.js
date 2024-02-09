import { useEffect, useState } from 'react'
import './components.css'
import { Button, Card, Grid, Typography } from '@mui/material'
import {TextField} from '@mui/material'
import {FormLabel} from '@mui/material'

const AddEmpForm = ({formState,employees,setSelectedEmp,onSetFormState,selectedEmp,showForm,addEmployee,setShowform}) =>{
    let error
    let formobj = []
    for(let i=0;i<Object.keys(employees[0]).length;i++){
        if(Object.keys(employees[0])[i] !== "id" && Object.keys(employees[0])[i] !== "address" && Object.keys(employees[0])[i] !== "company"){
            formobj.push(Object.keys(employees[0])[i])
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
        if(showForm === "UpdateEmpForm"){
            setSelectedEmp(formState)
        }
        onSetFormState('')
        setShowform()
    }
    
    // ----------------------------Create Form-----------------------------
    let form = [];
    function createform(){
        for(let i=0;i<formobj.length;i++){
            form.push(
                <Grid container direction='row' key={formobj[i]} alignItems='center' margin='10px auto'>

                    <Grid item xs={12} sm={5} lg={4}>
                        <FormLabel sx={{fontSize:15}}>{formobj[i].charAt(0).toUpperCase()+formobj[i].slice(1)}:</FormLabel>
                    </Grid>

                    <Grid item xs={12} sm={7} lg={8}>
                        {(showForm === "AddEmpForm")? 
                            <TextField required placeholder={'Enter ' + formobj[i]} style={{marginBottom:'5px'}} size='small' onChange={(event)=>{{onSetFormState({...formState, [formobj[i]] : event.target.value})}}}/>
                        :   <TextField required placeholder={'Enter ' + formobj[i]} style={{marginBottom:'5px'}} size='small' value={formState[formobj[i]]} onChange={(event)=>{{onSetFormState({...formState, [formobj[i]] : event.target.value})}}}/>
                        }
                    </Grid>
                    
                </Grid>
            )
        }
    }


    return(
        <Card id='addEmpForm' sx={{padding:'25px', paddingTop:'0px'}}>
            {(showForm === "AddEmpForm")? <Typography variant='h5' fontWeight='bold' textAlign='center' margin='0 0 10px 0' bgcolor='#68e3b6' padding={1} marginTop='15px'>Add Employee</Typography> : <Typography variant='h5' fontWeight='bold' textAlign='center' bgcolor='#68e3b6' padding='5px' marginTop='15px'>Update Employee</Typography>}
            <form>
                <Grid container direction='column' margin='auto' alignItems='center'>

                    {createform()}
                    {form}

                    <Grid item textAlign='center' margin='10px 0 0 0'>
                        
                        <Button variant='contained' id='submitBtn' type='submit' onClick={(event) =>{
                            {(validate()) ?
                                afterValidationTrue() : error = "error"
                            }}
                        } sx={{backgroundColor:'green', margin:'5px'}}>Submit</Button>
                        
                        <Button sx={{margin:'5px'}} variant='contained' id='resetBtn' type='reset' onClick={() => { onSetFormState('')}}>Reset</Button>
                        
                        <Button sx={{backgroundColor:'red', margin:'5px'}} variant='contained' id='cancelBtn' type='button'onClick={(event)=>setShowform()}>Cancel</Button>
                    
                    </Grid>

                </Grid>
            </form>
        </Card>
    )
}

export default AddEmpForm;