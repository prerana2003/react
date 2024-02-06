import { useState } from 'react'
import './components.css'

const AddEmpForm = (props) =>{
    const [error,setError] = useState()

    let formobj = []
    for(let i=0;i<Object.keys(props.employees[0]).length;i++){
        if(Object.keys(props.employees[0])[i] !== "id" && Object.keys(props.employees[0])[i] !== "address" && Object.keys(props.employees[0])[i] !== "company"){
            formobj.push(Object.keys(props.employees[0])[i])
        }
    }

    let empObj = {}
    
    for(let i=0;i<formobj.length;i++){
        empObj[formobj[i]] = ''
    }

    const [formState, setFormState] = useState(empObj)
    
    // ----------------------------Add Employee Form-----------------------------
    let form = [];
    function forAddEmpform(){
        for(let i=0;i<formobj.length;i++){
            form.push(
                <div key={formobj[i]}>
                    <label id={formobj[i]+'lable'}>{formobj[i].charAt(0).toUpperCase()+formobj[i].slice(1)} : </label>
                    <input id={formobj[i]+'Input'} type='text' required placeholder={'Enter ' + formobj[i]} onChange={(event)=>{{setFormState({...formState, [formobj[i]] : event.target.value})}}} ></input>
                    {(!formState[formobj[i]]) ? <lable style = {{color:'red'}}> {error}</lable> : ''}
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
        props.addEmployee(formState)
        setFormState('')
        props.setShowform()
    }

    return(
        <div id='addEmpForm'>
            <h1 id='formTitle'>Add Employee</h1>
            <form>
                {forAddEmpform()}
                {form}
                <button id='resetBtn' type='reset' onClick={() => {setError(''); setFormState('')}}>Reset</button>
            </form>
            <button id='submitBtn' type='submit' onClick={(event) =>{
                    {(validate()) ?
                        afterValidationTrue() : setError("Please fill out this field!")
                    }}}>Submit</button>
            <button id='cancelBtn' type='button'onClick={(event)=>props.setShowform()}>Cancel</button>
        </div>
    )
}

export default AddEmpForm;
