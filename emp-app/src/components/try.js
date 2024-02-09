// import { useState } from 'react'
// import './components.css'

// const AddEmpForm = (props) =>{
//     const [error,setError] = useState()

//     let formobj = []
//     for(let i=0;i<Object.keys(props.employees[0]).length;i++){
//         if(Object.keys(props.employees[0])[i] !== "id" && Object.keys(props.employees[0])[i] !== "address" && Object.keys(props.employees[0])[i] !== "company"){
//             formobj.push(Object.keys(props.employees[0])[i])
//         }
//     }

//     let empObj = {}
    
//     for(let i=0;i<formobj.length;i++){
//         empObj[formobj[i]] = ''
//     }

//     const [formState, setFormState] = useState(empObj)
    
//     // ----------------------------Add Employee Form-----------------------------
//     let form = [];
//     function forAddEmpform(){
//         for(let i=0;i<formobj.length;i++){
//             form.push(
//                 <div key={formobj[i]}>
//                     <label id={formobj[i]+'lable'}>{formobj[i].charAt(0).toUpperCase()+formobj[i].slice(1)} : </label>
//                     <input id={formobj[i]+'Input'} type='text' required placeholder={'Enter ' + formobj[i]} onChange={(event)=>{{setFormState({...formState, [formobj[i]] : event.target.value})}}} ></input>
//                     {(!formState[formobj[i]]) ? <lable style = {{color:'red'}}> {error}</lable> : ''}
//                 </div>
//             )
//         }
//     }

//     function validate(){
//         let validated =true
//         for(let i=0;i<formobj.length;i++){
//             if(!formState[formobj[i]]){
//                 validated = false;
//             }
//         }
//         return validated;
//     }

//     function afterValidationTrue(){
//         props.addEmployee(formState)
//         setFormState('')
//         props.setShowform()
//     }

//     return(
//         <div id='addEmpForm'>
//             <h1 id='formTitle'>Add Employee</h1>
//             <form>
//                 {forAddEmpform()}
//                 {form}
//                 <button id='resetBtn' type='reset' onClick={() => {setError(''); setFormState('')}}>Reset</button>
//             </form>
//             <button id='submitBtn' type='submit' onClick={(event) =>{
//                     {(validate()) ?
//                         afterValidationTrue() : setError("Please fill out this field!")
//                     }}}>Submit</button>
//             <button id='cancelBtn' type='button'onClick={(event)=>props.setShowform()}>Cancel</button>
//         </div>
//     )
// }

// export default AddEmpForm;


// --------------------------------------------------------
//--------creating Promise------------
  // function validateResult(data){
  //   let result = data * 2
  //   const pr1 = new Promise((resolve, reject) =>{
  //     if(result>10){
  //         resolve(result)
  //     }
  //     else{
  //       reject("error in validating result")
  //     }
  //   })
  //   return pr1
  // }

  // function validateNo(){
  //   let x = 5
  //   const pr = new Promise((resolve,reject) => { 
  //       if(x>5){
  //         setTimeout(()=>{
  //           resolve(x)
  //         }, 3000)
  //       }
  //       else{
  //         reject("error in validating number")
  //       }
  //   })
  //   return pr
  // }

  //   validateNo()
  //   .then((res) => {
  //     console.log("number is: ",res);
  //     return res;
  //   })
  //   .then((res) =>{
  //     return validateResult(res)
  //   })
  //   .then((res) => {
  //     console.log("result is: ",res)
  //   })
  //   .catch((err)=> {console.log(err)})


//   function fetchingAPI(){
//     const pr = new Promise((resolve,reject)=>{
//       resolve(fetch('https://jsonlaceholder.typicode.com/users'))
//     })
//     return pr
//   }

//   fetchingAPI()
//   .then((res)=>{
//     return res.json()
//   })
//   .then((data)=>{
//     console.log(data)
//   })
//   .catch(()=>{
//     console.log("error in fetching API")
//   })


// import './components.css'
// import Toolbar from './toolbar';
// import EmpList from './empList';
// import { useState } from 'react';
// import { Box } from '@mui/material';

// const Left = ({employees, setSelectedEmp, selectedEmp, onDeleteClick, setShowform, onSetFormState}) =>{
//     let [SearchValue, setSearchValue] = useState('')
//     let [SortBtnID, setBtnID] = useState('')


//     function onSearch(myValue){
//         setSearchValue(myValue)
//     }

//     function sort(btn_ID){
//         setBtnID(btn_ID)
//     }

//     return(
//         <Box sx={{maxHeight:'500', padding:'7px', margin:'10px 5px', position:'relative', display:'block', borderRight:'1px solid black'}}>
//             <Toolbar onSetFormState = {onSetFormState} onSearch = {onSearch} sort = {sort} SortBtnID = {SortBtnID} SearchValue={SearchValue} setSelectedEmp = {setSelectedEmp} selectedEmp = {selectedEmp} onDeleteClick = {onDeleteClick} setShowform = {setShowform}/>
//             <EmpList employees = {employees} SearchValue = {SearchValue} SortBtnID = {SortBtnID} setSelectedEmp = {setSelectedEmp} selectedEmp={selectedEmp}/>
//         </Box>
//     )
// }

// export default Left;





// -------------------------------------------------------------
import './components.css'
import ToolBar from './toolbar';
import EmpList from './empList';
import { useState } from 'react';
import { Drawer, Grid } from '@mui/material';
import {Toolbar} from '@mui/material';


const Left = ({employees, setSelectedEmp, selectedEmp, onDeleteClick, setShowform, onSetFormState}) =>{
    let [SearchValue, setSearchValue] = useState('')
    let [SortBtnID, setBtnID] = useState('')


    function onSearch(myValue){
        setSearchValue(myValue)
    }

    function sort(btn_ID){
        setBtnID(btn_ID)
    }

    return(
        <Drawer variant="permanent" overflow='none' style={{width: '100%', zIndex: 1, position:'relative'}}>
            <Toolbar />
            <Grid container direction='column' position='sticky' id='left' marginTop='30px'>
                <Grid item>
                    <ToolBar onSetFormState = {onSetFormState} onSearch = {onSearch} sort = {sort} SortBtnID = {SortBtnID} SearchValue={SearchValue} setSelectedEmp = {setSelectedEmp} selectedEmp = {selectedEmp} onDeleteClick = {onDeleteClick} setShowform = {setShowform}/>
                </Grid>
                
                <Grid item height='73vh' overflow='auto'>
                    <EmpList employees = {employees} SearchValue = {SearchValue} SortBtnID = {SortBtnID} setSelectedEmp = {setSelectedEmp} selectedEmp={selectedEmp}/>
                </Grid>
            </Grid>
        </Drawer>
    )
}

export default Left;