import './components.css'
import DisplayEmployeeDetails from './displayEmp'
import AddEmpForm from './addEmpForm'

const Center = (props) =>{
    return(
        <div id='center'>
            {/* ---------------Display Employee------------------------ */}
            {(props.selectedEmp) ? 
                <DisplayEmployeeDetails selectedEmp = {props.selectedEmp} setSelectedEmpFunc = {props.setSelectedEmpFunc} forShowform = {props.forShowform}/> : ''
            }

            {/* ---------------------Add Employee Form--------------------- */}
            {(props.showForm) ?
                <AddEmpForm selectedEmp = {props.selectedEmp} setSelectedEmpFunc = {props.setSelectedEmpFunc} getNewEmployee = {props.getNewEmployee} forShowform = {props.forShowform} showForm = {props.showForm}/> : ''
            }
        </div>
    )
}

export default Center