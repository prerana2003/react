import './App.css';
import Header from './components/header'
import Left from './components/left'
import Center from './components/center';

import React, { useState } from "react"


const Parent = ()=>{
  let employeesObj = {}
  const [employees, setEmployees] = useState(employeesObj)
  const [SelectedEmp, setSelectedEmp] = useState()
  const [showForm, setForm] = useState()
  const [empID, setempID] = useState(1)

  function getNewEmployee(empobj){
    empobj["ID"]= 'Emp'+empID
    employees['Emp'+empID] = empobj;
    setEmployees(employees)
    console.log(employees)
    setempID(empID+1)
  }

  function setSelectedEmpFunc(emp){
    setSelectedEmp(emp)
    setForm('')
  }

  function onDeleteClick(){
    for(let x in employees){
      if(SelectedEmp.ID === employees[x].ID){
        delete employees[x]
        setEmployees(employees)
        setSelectedEmp('')
      }
    }
  }

  function forShowform(formName){
    setSelectedEmp('')
    setForm(formName)
    console.log(showForm)
  }


  return(
    <div>
      <Header employees= {employees}/>
      <div id='mainContentDiv'>
        <Left employees = {employees} setSelectedEmp = {setSelectedEmpFunc} SelectedEmp = {SelectedEmp} onDeleteClick= {onDeleteClick} forShowform = {forShowform}/>
        <Center SelectedEmp = {SelectedEmp} showForm = {showForm} getNewEmployee= {getNewEmployee} forShowform = {forShowform}/>
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