import './components.css'

const Center = (props) =>{
    let employeeDetails = []
    for(let x in props.SelectedEmp){
        employeeDetails.push(
            <div>
                <label>{x} : </label>
                {(props.showForm === "updateForm") ? 
                    <input type='text' value={props.SelectedEmp[x]} onChange={(event)=>{empobj[x] = event.target.value}} ></input> 
                    : <label>{props.SelectedEmp[x]}</label>
                }
            </div>
        )
    }
    
    let empobj = {}
    let formobj = ["Name","Salary","Designation", "Department ID"]
    let form = []
    for(let i=0;i<formobj.length;i++){
        form.push(
            <div>
                <label>{formobj[i]} : </label>
                <input type='text' required placeholder={'Enter ' + formobj[i]} onChange={(event)=>{empobj[formobj[i]] = event.target.value}} ></input>
            </div>
        )
    }

    return(
        <div id='center'>
            {(props.SelectedEmp !== '' && props.SelectedEmp !== undefined) ? 
                <div id='DisplayEmployee'>
                    {employeeDetails}
                    <button type='button' onClick={(event)=>props.forShowform("updateForm")}>Update</button>
                </div> : ''
            }
            {(props.showForm !== undefined && props.showForm === "AddEmpForm") ? 
                
                <div id='addEmpForm'>
                    <h1>Add Employee</h1>
                    {form}
                    <button type='submit' onClick={(event) =>{
                        props.getNewEmployee(empobj)
                    }}>Submit</button>
                    {/* <button type='reset' onClick={(event)=>props.forShowform("AddEmpForm")}>Reset</button> */}
                    <button type='button'onClick={(event)=>props.forShowform()}>Cancel</button>
                </div> : ''
            }
        </div>
    )
}

export default Center


// onChange={(event)=>{empObj[formobj[i]] = event.target.value}}