import { useState } from 'react';
import './components.css'

const EmpItem = ({emp, setSelectedEmp, employees, selectedEmp}) =>{
    function onClick(){
        setSelectedEmp(emp)
    }
    
    return(
        <li className='empItem' id={emp.ID} style={{backgroundColor: (selectedEmp && emp.ID === selectedEmp.ID) ? 'navy' : ''}}
        onClick={(event) =>{
            onClick()
        }}
        >{emp.ID} : {emp.Name}</li>
        
    )
}

const EmpList = (props) =>{
    let EmpListArr = []

    let CloneEmps = props.employees;

    // ------------------Searching------------------------------------
    function search(){
        if(props.SearchValue){
            CloneEmps = CloneEmps.filter(function(emp){
                if(emp.Name.includes(props.SearchValue)){
                    return emp;
                }
            })
            for(let i=0;i<CloneEmps.length;i++){ 
                EmpListArr.push(<EmpItem key= {CloneEmps[i].ID}  emp = {CloneEmps[i]} setSelectedEmp = {props.setSelectedEmp} employees={props.employees} selectedEmp = {props.selectedEmp}/>)
            }
        }
        else{
            for(let i=0;i<CloneEmps.length;i++){ 
                EmpListArr.push(<EmpItem key= {CloneEmps[i].ID} emp = {CloneEmps[i]} setSelectedEmp = {props.setSelectedEmp} employees={props.employees} selectedEmp = {props.selectedEmp}/>)
            }
        }
    }

    // ----------------------Sorting---------------------------
    function sort(){
        if(props.SortBtnID === 'asc'){
            CloneEmps.sort(function(a,b){
                return a.Name.localeCompare(b.Name);
            });
            EmpListArr = []
            for(let i=0;i<CloneEmps.length;i++){ 
                EmpListArr.push(<EmpItem key= {CloneEmps[i].ID} emp = {CloneEmps[i]} setSelectedEmp = {props.setSelectedEmp} employees={props.employees} selectedEmp = {props.selectedEmp}/>)
            }
        }
        else if(props.SortBtnID === 'dsc'){
            CloneEmps.sort(function(a,b){
                return b.Name.localeCompare(a.Name);
            });
            EmpListArr = []
            for(let i=0;i<CloneEmps.length;i++){
                EmpListArr.push(<EmpItem key= {CloneEmps[i].ID} emp = {CloneEmps[i]} setSelectedEmp = {props.setSelectedEmp} employees={props.employees} selectedEmp = {props.selectedEmp}/>)
            }
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