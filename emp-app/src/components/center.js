import './components.css'
import DisplayEmployeeDetails from './displayEmp'
import AddEmpForm from './addEmpForm'

const Center = (props) =>{
    return(
        <div id='center'>
            {/* ---------------Display Employee------------------------ */}
            {(props.selectedEmp) ? 
                <DisplayEmployeeDetails onSetFormState = {props.onSetFormState} selectedEmp = {props.selectedEmp} setSelectedEmp = {props.setSelectedEmp} setShowform = {props.setShowform}/> : ''
            }

            {/* ---------------------Add Employee Form--------------------- */}
            {(props.showForm) ?
                <AddEmpForm employees = {props.employees} onSetFormState = {props.onSetFormState} formState = {props.formState} selectedEmp = {props.selectedEmp} setSelectedEmp = {props.setSelectedEmp} addEmployee = {props.addEmployee} setShowform = {props.setShowform} showForm = {props.showForm}/> : ''
            }
        </div>
    )
}

export default Center