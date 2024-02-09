import './components.css'
import DisplayEmployeeDetails from './displayEmp'
import AddEmpForm from './addEmpForm'
import { Box, Card, Grid } from '@mui/material'
import { useEffect, useState } from 'react'

const Center = (props) =>{  

    let empObj = {}
    const [formState, setFormState] = useState(empObj)

    function onSetFormState(empObj){
        setFormState(empObj)
    }

    useEffect(()=>{
        // if(showForm === "AddEmpForm"){
        //     for(let i=0;i<formobj.length;i++){
        //         empObj[formobj[i]] = ''
        //     }
        //     setFormState(empObj)
        // }
        // else 
        // if(showForm ==="UpdateEmpForm"){
            console.log("UpdateForm")
            for(let x in props.selectedEmp){
                empObj[x] = props.selectedEmp[x]
            }
            console.log("empobj ", empObj)
            setFormState(empObj)
            console.log("formState ",formState)
        // }
    },[props.selectedEmp])

    return(
        <Grid container justifyContent='space-evenly' alignItems='center' sx={{margin: 'auto', padding:'20px', alignItems:'center'}}>
            {/* ---------------Display Employee------------------------ */}
            {(props.selectedEmp && !props.showForm) ? 
                <DisplayEmployeeDetails onSetFormState = {props.onSetFormState} selectedEmp = {props.selectedEmp} setSelectedEmp = {props.setSelectedEmp} setShowform = {props.setShowform}/> : ''
            }

            {/* ------------------Update Employee Form------------------ */}
            {(props.showForm==="UpdateEmpForm") ? 
                <AddEmpForm formState={formState} onSetFormState={onSetFormState} employees = {props.employees} selectedEmp = {props.selectedEmp} setSelectedEmp = {props.setSelectedEmp} addEmployee = {props.addEmployee} setShowform = {props.setShowform} showForm = {props.showForm}/> : ''
            }

            {/* ---------------------Add Employee Form--------------------- */}
            {(props.showForm === "AddEmpForm") ?
                <AddEmpForm formState={formState} onSetFormState={onSetFormState} employees = {props.employees} selectedEmp = {props.selectedEmp} setSelectedEmp = {props.setSelectedEmp} addEmployee = {props.addEmployee} setShowform = {props.setShowform} showForm = {props.showForm}/> : ''
            }
        </Grid>
    )
}

export default Center