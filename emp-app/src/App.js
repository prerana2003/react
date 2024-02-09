import './App.css';
import Header from './components/header'
import Center from './components/center';
import {Grid} from '@mui/material';
import MyDrawer from './components/Drawer';

import React, { useEffect, useState } from "react"

const Parent = ()=>{
  // let employeesObj = require('./employees.json').employees;
  const [employees, setEmployees] = useState([])
  const [selectedEmp, setSelectedEmployee] = useState()
  const [showForm, setForm] = useState("")

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

  // const myPromise = new Promise((resolved, rejected)=>{
  //   const emps = fetch('https://jsonplaceholder.typicode.com/users')
  //   function resolved(){
  //     console.log("success")
  //   }
  //   function rejected(){
  //     console.error("Error")
  //   }
  // })

  // myPromise.then

  useEffect(() =>{
    async function fetchAPI(){
      try{
        const response= await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await response.json();
        // console.log(result)
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
    if(showForm === "AddEmpForm"){
      empobj["id"]= (employees.length+1)
      cloneEmp.push(empobj);
      setEmployees(cloneEmp)
    }
    else if(showForm === "UpdateEmpForm"){
      for(let i=0;i<cloneEmp.length;i++){
        if(cloneEmp[i]["id"] === selectedEmp["id"]){
          cloneEmp[i]= empobj
        }
        console.log(cloneEmp)
        setEmployees(cloneEmp)
      }
    }
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
    <Grid container alignItems='center'>

      <Grid item xs={12}>
        <Header employees = {employees} setSelectedEmp = {setSelectedEmp} selectedEmp = {selectedEmp} onDeleteClick= {onDeleteClick} setShowform = {setShowform}/>
      </Grid>

      <Grid container sx={{maxHeight:"70%"}}>

        <Grid item xs={12} sm={6} md={4} lg={3} sx={{padding:'5px'}}>
          <MyDrawer employees = {employees} setSelectedEmp = {setSelectedEmp} selectedEmp = {selectedEmp} onDeleteClick= {onDeleteClick} setShowform = {setShowform}/>
        </Grid>

        <Grid item xs={12} sm={6} md={8} lg={9}>
          <Center employees = {employees} selectedEmp = {selectedEmp} setSelectedEmp={setSelectedEmp} showForm = {showForm} addEmployee= {addEmployee} setShowform = {setShowform} />
        </Grid>

      </Grid>

    </Grid>
  )
}

export default Parent;