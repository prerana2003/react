
// {(props.showForm === "updateForm") ? 
//                     <input type='text' required placeholder={'Enter ' + props.SelectedEmp[x]} onChange={
//                         (event)=>{
//                             formState = {}
//                             setFormState({...formState, [props.SelectedEmp[x]] : event.target.value})
//                     }} ></input> 
//                     : <label>{props.SelectedEmp[x]}</label>
//                 }
// onChange={(event)=>{empObj[formobj[i]] = event.target.value}}





// --------------------------------------------------------
// import { useState } from 'react'
// import './components.css'

// const Center = (props) =>{
//     const [formState, setFormState] = useState()

//     let employeeDetails = []

//     let formobj = ["Name","Salary","Designation", "Department ID"]
//             let form = []
//             for(let i=0;i<formobj.length;i++){
//                 form.push(
//                         <div>
//                             <label>{formobj[i]} : </label>
//                             <input type='text' required placeholder={'Enter ' + formobj[i]} onChange={
//                                 (event)=>{
//                                     setFormState({...formState, [formobj[i]] : event.target.value})
//                                 }} ></input>
//                         </div>
//                 )
//             }

//     // console.log(formState)
//     function ShowInCenter(){
//         if(props.SelectedEmp !== '' && props.SelectedEmp !== undefined && props.showForm === ""){
//             for(let x in props.SelectedEmp){
//                 employeeDetails.push(
//                     <div>
//                         <label>{x} : </label>
//                         {console.log(props.showForm === "updateForm")}
//                         {(props.showForm === "updateForm") ? 
//                             <input type='text' required placeholder={'Enter ' + props.SelectedEmp[x]} onChange={
//                                 (event)=>{
//                                     formState = {}
//                                     setFormState({...formState, [props.SelectedEmp[x]] : event.target.value})
//                             }} ></input> 
//                             : <label>{props.SelectedEmp[x]}</label>
//                         }
//                     </div>
//                 )
//             }
//             return(
//                 <div id='DisplayEmployee'>
//                         {employeeDetails}
//                         <button type='button' onClick={(event)=>{props.forShowform("updateForm")
//                                 employeeDetails = []}}>Update</button>
//                         <button type='button'onClick={(event)=>props.setSelectedEmpFunc()}>Cancel</button>
//                 </div>
//             )
//         }
//         else if(props.showForm !== undefined && props.showForm === "updateForm"){
//             for(let x in props.SelectedEmp){
//                 employeeDetails.push(
//                     <div>
//                         <label>{x} : </label>
//                         {console.log(props.showForm === "updateForm")}
//                             <input type='text' required placeholder={'Enter ' + props.SelectedEmp[x]} onChange={
//                                 (event)=>{
//                                     formState = {}
//                                     setFormState({...formState, [props.SelectedEmp[x]] : event.target.value})
//                             }} ></input> 
//                     </div>
//                 )
//             }
//             return(
//                 <div id='DisplayEmployee'>
//                     {employeeDetails}
//                     <button type='submit' onClick={(event) =>{
//                                 // {(Object.keys(formState).length < formobj.length) ?
//                                 // alert("Please fill out all fields") : props.getNewEmployee(formState)}
//                                 // setFormState('')
//                     }
//                     }>Submit</button>
//                     <button type='button'onClick={(event)=>props.setSelectedEmpFunc()}>Cancel</button>
//                 </div>
//             )
//         }
//         else if(props.showForm !== undefined && props.showForm === "AddEmpForm"){
//             // return(
                
//             // )
//         }

//     }



//     return(
//         <div id='center'>
//             <ShowInCenter/>
//             <div id='addEmpForm'>
//                     <h1>Add Employee</h1>
//                     <form>
//                         {form}
//                         <input type='reset'/>
//                     </form>
//                     <button type='submit' onClick={(event) =>{
//                             {(Object.keys(formState).length < formobj.length) ?
//                             alert("Please fill out all fields") : props.getNewEmployee(formState)}
//                             setFormState('')
//                         }
//                     }>Submit</button>
//                     <button type='button'onClick={(event)=>props.forShowform()}>Cancel</button>
//             </div>
//         </div>
//     )
// }

// export default Center



// {/* --------------------update Employee Form----------------------- */}
// {(props.showForm !== undefined && props.showForm === "UpdateEmpForm") ?
                
// <div id='updateEmp'>
//     <h1>Update Employee</h1>
//     <form>
//         {form}
//         {/* <input type='reset'/> */}
//     </form>
//     <button type='submit' onClick={(event) =>{
//             {(Object.keys(formState).length < formobj.length) ?
//             alert("Please fill out all fields") : props.getNewEmployee(formState)}
//             setFormState('')
//         } 
//     }>Submit</button>
//     <button type='button'onClick={(event)=>props.forShowform()}>Cancel</button>
// </div> : ''
// }



    // // -----------------------------Update Form-------------------------------
    // for(let x in props.SelectedEmp){
    //     form = []
    //     form.push(
    //             <div>
    //                 <label>{x} : </label>
    //                 <input type='text' required placeholder={'Enter ' + x} value={props.SelectedEmp[x]} onChange={
    //                     (event)=>{
    //                         setFormState({...formState, [x] : event.target.value})
    //                     }} ></input>
    //             </div>
    //     )
    // }








    // const [color,setColor] = ;
    
    // function myColor(){
        
    // }

    // function onClick(event){
    //     if(SelectedEmp !== undefined && emp.ID !== SelectedEmp.ID){
    //         color = 'navy';
    //     }
    //     else{
    //         color = 'darkcyan'
    //     }
    //     setSelectedEmp(emp)
    // }