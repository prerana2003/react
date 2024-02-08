import './components.css'
import { List } from '@mui/material'
import {ListItem} from '@mui/material'
import {ListItemText} from '@mui/material'
import {Typography} from '@mui/material'
import {ListItemAvatar} from '@mui/material'
import {Avatar} from '@mui/material'
import {Box} from '@mui/material'
import React from 'react'

const EmpItem = ({emp, setSelectedEmp, employees, selectedEmp}) =>{
    function onClick(){
        setSelectedEmp(emp)
    }
    
    return(
        <ListItem alignItems="flex-start" component= "li" onClick={onClick} id={emp['id']} style={{backgroundColor: (selectedEmp && emp['id'] === selectedEmp['id']) ? 'navy' : 'darkcyan', color:'white'}} sx={{width:'95%', margin:"5px", borderRadius:"35px"}}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp">{emp['name'].charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText
            primary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline', alignItems:'center', fontSize:15}}
                    component="label"
                    id={emp['id']}
                >
                    {emp["name"]}
                </Typography>
                </React.Fragment>
            }
            secondary={
                <React.Fragment>
                    <Typography
                        sx={{ display: 'inline', alignItems:'center', fontSize:12, color:'white'}}
                        component="label"
                        id={emp['id']}
                        style={{backgroundColor: (selectedEmp && emp['id'] === selectedEmp['id']) ? 'navy' : ''}}
                    >
                        EmployeeID: {emp['id']}
                    </Typography>
                </React.Fragment>
            }
            />
      </ListItem>
    )
}

const EmpList = (props) =>{
    let EmpListArr = []

    let employees = props.employees;

    function showEmployees(){
        if(employees){
            for(let i=0;i<employees.length;i++){
                EmpListArr.push(<EmpItem key= {employees[i]["id"]}  emp = {employees[i]} setSelectedEmp = {props.setSelectedEmp} employees={props.employees} selectedEmp = {props.selectedEmp}/>)
            }
        }

        
    }

    // ------------------Searching------------------------------------
    function search(){
        if(props.SearchValue){
            employees = employees.filter(function(emp){
                if(emp["name"].toLowerCase().includes(props.SearchValue.toLowerCase())){
                    return emp;
                }
            })
            showEmployees();
        }
        else{
            showEmployees();
        }
    }

    // ----------------------Sorting---------------------------
    function sort(){
        if(props.SortBtnID === 'asc'){
            employees.sort(function(a,b){
                return a["name"].localeCompare(b["name"]);
            });
            EmpListArr = [];
            showEmployees();
        }
        else if(props.SortBtnID === 'dsc'){
            employees.sort(function(a,b){
                return b["name"].localeCompare(a["name"]);
            });
            EmpListArr = [];
            showEmployees();
        }
    }
    
    search()
    sort()

    return(
        <List sx={{overflow: 'auto', maxHeight: 460, overflow:'auto'}}>{EmpListArr}</List>
    )
}

export default EmpList;