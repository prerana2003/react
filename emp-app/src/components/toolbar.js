import './components.css'
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button} from '@mui/material';
import {Input} from '@mui/material';
import {InputAdornment} from '@mui/material';
import { GridSearchIcon } from '@mui/x-data-grid';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Toolbar = (props) =>{
    let SearchText;
    let id;

    return(
        <Box sx={{ margin:"10px", position:'sticky', display:'flex', flexDirection:'row'}}>
            
            <Input onChange={(event)=>{SearchText = event.target.value; props.onSearch(SearchText)}}
                id="input-with-icon-adornment"
                placeholder='Search...'
                sx={{width:150, margin:'3px'}}
                startAdornment={<InputAdornment position="start"><GridSearchIcon /></InputAdornment>}/>

            <Button variant='outlined' id='asc' onClick={(event)=>{id = event.target.id; props.sort(event.target.id)}} 
                style = {{border:'1px solid black', color:'black', borderWidth: (props.SortBtnID === "asc") ? '3px' : '', padding:'5px', minWidth:0, margin:'3px'}}>Asc</Button>

            <Button variant='outlined' id='dsc' onClick={(event)=>{id = event.target.id; props.sort(id)}} 
                style = {{border:'1px solid black', color:'black', borderWidth: (props.SortBtnID === "dsc") ? '3px' : '', padding:'3px', fontWeight:'inherit', minWidth:0, margin:'3px'}}>Dsc</Button>

            <Button variant="outlined" disabled = {(props.selectedEmp) ? false : true } 
                onClick={(event) =>{props.onDeleteClick()}}
                sx={{padding:'3px', minWidth: 0, border:'2px solid red', color:'red', margin:'3px'}}>
            <DeleteIcon fontSize="small"/></Button>

            <Button variant='outlined' onClick={() => {props.setShowform("AddEmpForm");}} sx={{minWidth:0, margin:'3px', padding:'3px'}}><PersonAddIcon/></Button>
            
        </Box>
    )
}

export default Toolbar;