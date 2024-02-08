import './components.css'
import { Box,Button, Card, FormLabel, Grid, Typography } from '@mui/material'
// import Button from '@mui/material'


const DisplayEmployeeDetails = (props) =>{
    let employeeDetails = []
    
    const DisplayComponent = () =>{
            for(let x in props.selectedEmp){
                employeeDetails.push(
                    <Grid key={x} display='flex' flexDirection='row'>

                        <FormLabel >{x} : </FormLabel>
                        {(x !== "address" && x !== "company") ? <Typography>{props.selectedEmp[x]}</Typography> : ""}
                        
                    </Grid>
                )
            }   
    }

    return(
            <Card id='DisplayEmployee' sx={{padding:'25px'}}>
                {DisplayComponent()}
                {employeeDetails}
                <Button variant='outlined' id='updateBtn' type='button' onClick={() => {props.setShowform("UpdateEmpForm");}}>Update</Button>
                <Button variant='outlined' id='cancelBtn' type='button'onClick={(event)=>props.setSelectedEmp()}>Cancel</Button>
            </Card>
    )
}

export default DisplayEmployeeDetails;

// props.onSetFormState();