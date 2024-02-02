import { useState } from 'react'
import './components.css'

const AddEmpForm = (props) =>{
    let formobj = ["Name","Salary","Designation", "Department ID"]
    let empObj = {}
    
    // for(let i=0;i<formobj.length;i++){
    //     empObj[formobj[i]] = ''
    // }
    if(props.selectedEmp){
        for(let x in props.selectedEmp){
            empObj[x] = props.selectedEmp[x]
        }
    }
    

    const [formState, setFormState] = useState(empObj)
    
    // ----------------------------Add Employee Form-----------------------------
    let form = [];
    function forAddEmpform(){
        form = [];
        for(let i=0;i<formobj.length;i++){
            form.push(
                <div key={formobj[i]}>
                    <label id={formobj[i]+'lable'}>{formobj[i]} : </label>
                    <input id={formobj[i]+'Input'} type='text' required placeholder={'Enter ' + formobj[i]} onChange={(event)=>{{setFormState({...formState, [formobj[i]] : event.target.value})}}} ></input>
                </div>
            )
        }
    }

    function forUpdateEmpForm(){
        form =[]
        for(let x in props.selectedEmp){
            form.push(
                <div key={x}>
                    <label>{x} : </label>
                    {(x === "ID")? 
                        <input id={x+'Input'} type='text' disabled placeholder={'Enter ' + x} value={formState? formState[x] : ''} onChange={(event)=>{{setFormState({...formState, [x] : event.target.value})}}} ></input> : 
                        <input id={x+'Input'} type='text' required placeholder={'Enter ' + x} value={formState? formState[x] : ''} onChange={(event)=>{{setFormState({...formState, [x] : event.target.value})}}} ></input>
                    }
                </div>
            )
        }  
        console.log(formState)
    }

    function validate(){
        let validated;
        for(let i=0;i<formobj.length;i++){
            if(formState[formobj[i]]){
                validated = true;
            }
            else{
                validated = false;
            }
        }
        return validated;
    }

    function onSubmit(){
        setFormState('')
        props.getNewEmployee(formState)
        props.forShowform()
    }

    function showform(){
        if(props.showForm === "AddEmpForm"){
            for(let i=0;i<formobj.length;i++){
                empObj[formobj[i]] = ''
            }
            forAddEmpform()
        }
        else if(props.selectedEmp && props.showForm === "UpdateEmpForm"){
            forUpdateEmpForm()
        }
    }
    

    return(
        <div id='addEmpForm'>
            <h1 id='formTitle'>Add Employee</h1>
            <form>
                {showform()}
                {form}
                <input id='resetBtn' type='reset'/>
            </form>
            <button id='submitBtn' type='submit' onClick={(event) =>{
                    {(!validate()) ?
                        alert("Please fill out all fields") : 
                        onSubmit()
                    }
                }
            }>Submit</button>
            <button id='cancelBtn' type='button'onClick={(event)=>props.forShowform()}>Cancel</button>
        </div>
    )
}

export default AddEmpForm;

// ---------------------------------------------------
// import { useState } from 'react'
// import './components.css'

// const AddEmpForm = (props) =>{
//     let formobj = ["Name","Salary","Designation", "Department ID"]
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
//                     <label id={formobj[i]+'lable'}>{formobj[i]} : </label>
//                     <input id={formobj[i]+'Input'} type='text' required placeholder={'Enter ' + formobj[i]} onChange={(event)=>{{setFormState({...formState, [formobj[i]] : event.target.value})}}} ></input>
//                 </div>
//             )
//         }
//     }

//     function validate(){
//         let validated;
//         for(let i=0;i<formobj.length;i++){
//             if(formState[formobj[i]]){
//                 validated = true;
//             }
//             else{
//                 validated = false;
//             }
//         }
//         return validated;
//     }

//     function afterValidationTrue(){
//         props.getNewEmployee(formState)
//         setFormState('')
//         props.forShowform()
//     }

//     return(
//         <div id='addEmpForm'>
//             <h1 id='formTitle'>Add Employee</h1>
//             <form>
//                 {forAddEmpform()}
//                 {form}
//                 <input id='resetBtn' type='reset'/>
//             </form>
//             <button id='submitBtn' type='submit' onClick={(event) =>{
//                     {(!validate()) ?
//                         alert("Please fill out all fields") : 
//                         afterValidationTrue()
//                     }
//                 }
//             }>Submit</button>
//             <button id='cancelBtn' type='button'onClick={(event)=>props.forShowform()}>Cancel</button>
//         </div>
//     )
// }

// export default AddEmpForm;