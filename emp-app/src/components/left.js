import './components.css'
import Toolbar from './toolbar';
import EmpList from './empList';
import { useState } from 'react';

const Left = ({employees, empID}) =>{
    let [leftState, setValue] = useState('')

    function search(myValue){
        setValue({...leftState, "SearchValue": myValue})
    }

    function sort(btn_ID){
        setValue({...leftState, id: btn_ID})
    }

    return(
        <div id='left'>
            <Toolbar onSearch = {search} sort = {sort} leftState={leftState}/>
            <EmpList employees = {employees} leftState = {leftState} empID = {empID}/>
        </div>
    )
}

export default Left;