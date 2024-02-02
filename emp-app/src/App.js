import './App.css';
import Header from './components/header'
import Left from './components/left'
import Center from './components/center';

import React, { useState } from "react"

const Parent = ()=>{
  let employeesObj = require('./employees.json').employees;
  const [employees, setEmployees] = useState(employeesObj)
  const [selectedEmp, setSelectedEmployee] = useState()
  const [showForm, setForm] = useState()


  function getNewEmployee(empobj){
    empobj["ID"]= 'Emp'+(employeesObj.length+1)

    // TODO-clone
    employees.push(empobj);
    setEmployees(employees)
    console.log(employees)
  }
  
  function setSelectedEmpFunc(emp){
    setSelectedEmployee(emp)
    setForm('')
  }

  function onDeleteClick(){
    for(let i=0;i<employees.length;i++){
      if(selectedEmp.ID === employees[i].ID){
        employees.splice(i,1)
        setEmployees(employees)
        setSelectedEmployee('')
      }
    }
  }

  function forShowform(formName){
    if(formName === "AddEmpForm"){
      setSelectedEmployee('')
    }
    setForm(formName)
     
  }

  return(
    <div>
      <Header employees= {employees}/>
      <div id='mainContentDiv'>
        <Left employees = {employees} setSelectedEmp = {setSelectedEmpFunc} selectedEmp = {selectedEmp} onDeleteClick= {onDeleteClick} forShowform = {forShowform}/>
        <Center selectedEmp = {selectedEmp} setSelectedEmpFunc={setSelectedEmpFunc} showForm = {showForm} getNewEmployee= {getNewEmployee} forShowform = {forShowform} />
      </div>
    </div>
  )
}

export default Parent;


























// const Header = () =>{
//   return(
//     <div id="root">
//       <nav>
//         <img src="logo.jpg" />
//         <label>Employee Count: </label>
//         <hr />
//       </nav>
//     </div>
//   )
// }

// const ToolBar = () =>{
//   return(
//     <div>
//       <input type= "text" placeholder='Enter your text'></input>
//       <button type='submit'>Submit</button>
//       <button type='button'>Asc</button>
//       <button type='button'>Des</button>
//       <button type='button'>Delete</button>
//     </div>
//   )
// }

// const EmpList = ({state}) =>{
//   let value;
//   function list(){
//     for(let i=0;i<{state}.employees.length;i++){

//     }
//   }
//   return(
//     {
//       // list();
//     }
//   )
// }

// const EmpItem = () =>{

//   return(
//     <div>
//       <label>{value}</label>
//     </div>
//   )
// }

// const Left = ({state}) =>{
//   return(
//     <div>
//       <ToolBar/>
//     </div>
//   )
// }

// const Center = () =>{
//   return(
//     <div>
      
//     </div>
//   )
// }

// // const Parent = () =>{
  

// //  return(
// //   <div>
// //     <Header />
// //   </div>
  
// //  )
// // }

// const Parent = () =>{
//   const [value, setState] = useState(
//     {employees : [
//       {
//         ID : "emp1",
//         Name : "Riya",
//         Salary : 200000,
//         Designation : "HR"
//       },
//       {
//         ID : "emp2",
//         Name : "Priya",
//         Salary : 5000000,
//         Designation : "Dev"
//       },
//       {
//         ID : "emp3",
//         Name : "Tia",
//         Salary : 200000,
//         Designation : "HR"
//       },
//       {
//         ID : "emp4",
//         Name : "Nita",
//         Salary : 200000,
//         Designation : "HR"
//       }
//     ]})

//     console.log(state)

//   return(
//     <div>
//       <Header />
//       <Left state = {state} />
//       <Center />
//     </div>
//   )
// }

// export default Parent;