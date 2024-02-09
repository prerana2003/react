import './components.css'
import { Button, Card, Divider, FormLabel, Grid, Typography } from '@mui/material'


const DisplayEmployeeDetails = (props) =>{
    let employeeDetails = []
    
    const DisplayComponent = () =>{
            for(let x in props.selectedEmp){
                employeeDetails.push(
                    <Grid container direction='row' margin='5px 0' alignItems='center' key={x}>

                        <Grid item xs={5} lg={4}>
                            <FormLabel >{x.charAt(0).toUpperCase() + x.slice(1)}:</FormLabel>
                        </Grid>

                        <Grid item xs={7} lg={8} width='fit-content'>
                            {(x !== "address" && x !== "company") ? <Typography>{props.selectedEmp[x]}</Typography> : <Typography>{props.selectedEmp[x]["city"] || props.selectedEmp[x]["name"]}</Typography>}
                        </Grid>
                        
                    </Grid>
                )
            }   
    }

    return(
            <Card id='DisplayEmployee' sx={{padding:'25px', minWidth:'45vh'}}>

                <Typography variant='h5' sx={{margin:'0 0 15px 0', fontWeight:'bold'}} textAlign='center' padding={1} bgcolor='#68e3b6'>
                    Employee Details
                </Typography>

                <Grid container direction='column' alignItems='center'>

                    {DisplayComponent()}
                    {employeeDetails}

                    <Grid item textAlign='center' margin='10px 0 0 0'>
                        <Button variant='outlined' sx={{border:'1px solid #62a68d', fontWeight:'bold', color:'#558070', margin:'5px'}} id='updateBtn' type='button' onClick={() => {props.setShowform("UpdateEmpForm");}}>Update</Button>
                        <Button variant='outlined' sx={{border:'1px solid #62a68d', fontWeight:'bold', color:'#558070', margin:'5px'}} id='cancelBtn' type='button'onClick={(event)=>props.setSelectedEmp()}>Cancel</Button>
                    </Grid>

                </Grid>

            </Card>
    )
}

export default DisplayEmployeeDetails;

// props.onSetFormState();