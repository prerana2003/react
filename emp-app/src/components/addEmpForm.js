import { useEffect, useState } from 'react'
import './components.css'

const AddEmpForm = ({employees,selectedEmp,showForm,addEmployee,setShowform}) =>{
    // const [error,setError] = useState()
    let error
    let formobj = []
    for(let i=0;i<Object.keys(employees[0]).length;i++){
        if(Object.keys(employees[0])[i] !== "id" && Object.keys(employees[0])[i] !== "address" && Object.keys(employees[0])[i] !== "company"){
            formobj.push(Object.keys(employees[0])[i])
        }
    }

    
    let empObj = {}
    const [formState, setFormState] = useState(empObj)
    
    useEffect(()=>{
        for(let i=0;i<formobj.length;i++){
            empObj[formobj[i]] = ''
        }
        setFormState(empObj)
    },[showForm === "AddEmpForm"])
    
    
    useEffect(()=>{
            console.log("UpdateForm")
            for(let x in selectedEmp){
                empObj[x] = selectedEmp[x]
            }
            console.log("empobj ", empObj)
            setFormState(empObj)
            console.log("formState ",formState)
    },[showForm === "UpdateEmpForm"])
    
    // ----------------------------Add Employee Form-----------------------------
    let form = [];
    function createform(){
        for(let i=0;i<formobj.length;i++){
            form.push(
                <div key={formobj[i]}>
                    <label id={formobj[i]+'lable'}>{formobj[i].charAt(0).toUpperCase()+formobj[i].slice(1)} : </label>
                    {(showForm === "AddEmpForm")? 
                        <input id={formobj[i]+'Input'} type='text' required placeholder={'Enter ' + formobj[i]} onChange={(event)=>{{setFormState({...formState, [formobj[i]] : event.target.value})}}} ></input>
                    :   <input id={formobj[i]+'Input'} type='text' required placeholder={'Enter ' + formobj[i]} value={(formState) ? formState[formobj[i]] : ''} onChange={(event)=>{{setFormState({...formState, [formobj[i]] : event.target.value})}}} ></input>
                    }
                    {/* {(!formState[formobj[i]]) ? <lable style = {{co lor:'red'}}> {error}</lable> : ''} */}
                </div>
            )
        }
    }

    function validate(){
        let validated =true
        for(let i=0;i<formobj.length;i++){
            if(!formState[formobj[i]]){
                validated = false;
            }
        }
        return validated;
    }

    function afterValidationTrue(){
        addEmployee(formState)
        setFormState('')
        setShowform()
    }

    return(
        <div id='addEmpForm'>
            {(showForm === "AddEmpForm")? <h1 id='formTitle'>Add Employee</h1> : <h1 id='formTitle'>Update Employee</h1>}
            <form>
                {createform()}
                {form}
                <button id='submitBtn' type='submit' onClick={(event) =>{
                    {(validate()) ?
                        afterValidationTrue() : error = "error"
                    }}
                }>Submit</button>
                <button id='resetBtn' type='reset' onClick={() => { setFormState('')}}>Reset</button>
                {/* setError(''); */}
            </form>
            {/* <button id='submitBtn' type='submit' onClick={(event) =>{
                    {(validate()) ?
                        afterValidationTrue() : setError("Please fill out this field!")
                    }}}>Submit</button> */}
            <button id='cancelBtn' type='button'onClick={(event)=>setShowform()}>Cancel</button>
        </div>
    )
}

export default AddEmpForm;