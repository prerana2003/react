// import { useState } from 'react';
import './components.css'

const EmpItem = ({emp, setSelectedEmp, employees, selectedEmp}) =>{
    function onClick(){
        setSelectedEmp(emp)
    }
    
    return(
        <li className='empItem' id={emp['id']} style={{backgroundColor: (selectedEmp && emp['id'] === selectedEmp['id']) ? 'navy' : ''}}
        onClick={(event) =>{
            onClick()
        }}
        >{emp['id']} : {emp["name"]}</li> 
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
        <div>
            <ul id='empList'>{EmpListArr}</ul>
        </div>
    )
}

export default EmpList;