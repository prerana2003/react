import { useState } from 'react'
import './components.css'

const Center = (props) =>{
    let formobj = ["Name","Salary","Designation", "Department ID"]
    let empObj = {}
    for(let i=0;i<formobj.length;i++){
        empObj[formobj[i]] = ''
    }

    const [formState, setFormState] = useState(empObj)
    

    // --------------------------Display Emp Arr-----------------------------
    let employeeDetails = []
    for(let x in props.SelectedEmp){
        employeeDetails.push(
            <div>
                <label>{x} : </label>
                <label>{props.SelectedEmp[x]}</label>
            </div>
        )
    }


    // ----------------------------Add Employee Form-----------------------------
    

    let form = []
    for(let i=0;i<formobj.length;i++){
        form.push(
                <div>
                    <label>{formobj[i]} : </label>
                    <input type='text' required placeholder={'Enter ' + formobj[i]} onChange={
                        (event)=>{
                            setFormState({...formState, [formobj[i]] : event.target.value})
                    }} ></input>
                </div>
        )
    }

    return(
        <div id='center'>
            {/* ---------------Display Employee------------------------ */}
            {(props.SelectedEmp) ? 
                <div id='DisplayEmployee'>
                    {employeeDetails}
                    <button type='button' onClick={(event)=>{props.forShowform("UpdateEmpForm")
                            employeeDetails = []}}>Update</button>
                    <button type='button'onClick={(event)=>props.setSelectedEmpFunc()}>Cancel</button>
                </div> : ''
            }


            {/* ---------------------Add Employee Form--------------------- */}
            {(props.showForm && props.showForm === "AddEmpForm") ? 
                <div id='addEmpForm'>
                    <h1>Add Employee</h1>
                    <form>
                        {form}
                        <input type='reset'/>
                    </form>
                    <button type='submit' onClick={(event) =>{
                            {(Object.keys(formState).length < formobj.length) ?
                            alert("Please fill out all fields") : props.getNewEmployee(formState)}
                            setFormState('')
                            props.forShowform()
                        } 
                    }>Submit</button>
                    <button type='button'onClick={(event)=>props.forShowform()}>Cancel</button>
                </div> : ''
            }
        </div>
    )
}

export default Center