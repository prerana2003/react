import './components.css'
import Toolbar from './toolbar';
import EmpList from './empList';
import { useState } from 'react';

const Left = ({employees, setSelectedEmp, SelectedEmp, onDeleteClick, forShowform}) =>{
    let [SearchValue, setSearchValue] = useState('')
    let [SortBtnID, setBtnID] = useState('')


    function onSearch(myValue){
        setSearchValue(myValue)
    }

    function sort(btn_ID){
        setBtnID(btn_ID)
    }

    return(
        <div id='left'>
            <Toolbar onSearch = {onSearch} sort = {sort} SortBtnID = {SortBtnID} SearchValue={SearchValue} SelectedEmp = {SelectedEmp} onDeleteClick = {onDeleteClick} forShowform = {forShowform}/>
            <EmpList employees = {employees} SearchValue = {SearchValue} SortBtnID = {SortBtnID} setSelectedEmp = {setSelectedEmp} SelectedEmp={SelectedEmp}/>
        </div>
    )
}

export default Left;