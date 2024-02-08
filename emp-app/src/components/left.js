import './components.css'
import Toolbar from './toolbar';
import EmpList from './empList';
import { useState } from 'react';
import { Box } from '@mui/material';

const Left = ({employees, setSelectedEmp, selectedEmp, onDeleteClick, setShowform, onSetFormState}) =>{
    let [SearchValue, setSearchValue] = useState('')
    let [SortBtnID, setBtnID] = useState('')


    function onSearch(myValue){
        setSearchValue(myValue)
    }

    function sort(btn_ID){
        setBtnID(btn_ID)
    }

    return(
        <Box id='left'>
            <Toolbar onSetFormState = {onSetFormState} onSearch = {onSearch} sort = {sort} SortBtnID = {SortBtnID} SearchValue={SearchValue} setSelectedEmp = {setSelectedEmp} selectedEmp = {selectedEmp} onDeleteClick = {onDeleteClick} setShowform = {setShowform}/>
            <EmpList employees = {employees} SearchValue = {SearchValue} SortBtnID = {SortBtnID} setSelectedEmp = {setSelectedEmp} selectedEmp={selectedEmp}/>
        </Box>
    )
}

export default Left;