import './components.css'


const DisplayEmployeeDetails = (props) =>{
    let employeeDetails = []
    
    const DisplayComponent = () =>{
            for(let x in props.selectedEmp){
                employeeDetails.push(
                    <div key={x}>
                        <label>{x} : </label>
                        <label>{props.selectedEmp[x]}</label>
                    </div>
                )
            }   
    }

    return(
            <div id='DisplayEmployee'>
                {DisplayComponent()}
                {employeeDetails}
                <button id='updateBtn' type='button' onClick={(event) =>{props.forShowform("UpdateEmpForm")}}>Update</button>
                <button id='cancelBtn' type='button'onClick={(event)=>props.setSelectedEmpFunc()}>Cancel</button>
            </div>
    )
}

export default DisplayEmployeeDetails;

