import './App.css';
import Header from './components/header'
import Left from './components/left'
import Center from './components/center';

import React, { useEffect, useState } from "react"

const Parent = ()=>{
  // let employeesObj = require('./employees.json').employees;
  const [employees, setEmployees] = useState([])
  const [selectedEmp, setSelectedEmployee] = useState()
  const [showForm, setForm] = useState()
  
  

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setEmployees(data);
  //     })
  //     .catch(() =>{
  //       console.error("404 - Error Occured")
  //     })
  // }, []);

  useEffect(() =>{
    async function fetchAPI(){
      try{
        const response= await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await response.json();
        setEmployees(result)
      }
      catch{
        console.log("404-Not Founds")
      }
    }
    fetchAPI()
  },[])
  

  let cloneEmp = []
  if(employees){
     cloneEmp= [...employees]
  }

  function addEmployee(empobj){
    empobj["id"]= (employees.length+1)
    cloneEmp.push(empobj);
    setEmployees(cloneEmp)
  }
  
  function setSelectedEmp(emp){
    setSelectedEmployee(emp)
    setForm('')
  }

  function onDeleteClick(){
    for(let i=0;i<employees.length;i++){
      if(selectedEmp["id"] === employees[i]["id"]){
        cloneEmp.splice(i,1)
        setEmployees(cloneEmp)
        setSelectedEmployee('')
      }
    }
  }

  function setShowform(formName){
    if(formName === "AddEmpForm"){
      setSelectedEmployee('')
    }
    setForm(formName)
     
  }

  return(
    <div>
      <Header employees= {employees}/>
      <div id='mainContentDiv'>
        <Left employees = {employees} setSelectedEmp = {setSelectedEmp} selectedEmp = {selectedEmp} onDeleteClick= {onDeleteClick} setShowform = {setShowform}/>
        <Center employees = {employees} selectedEmp = {selectedEmp} setSelectedEmp={setSelectedEmp} showForm = {showForm} addEmployee= {addEmployee} setShowform = {setShowform} />
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