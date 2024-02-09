import './components.css'
import ToolBar from './toolbar';
import EmpList from './empList';
import { useState } from 'react';
import {Grid } from '@mui/material';


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
        <Grid container direction='column' height='100%' position='sticky' id='left' marginTop='30px'>
            <Grid item >
                <ToolBar onSetFormState = {onSetFormState} onSearch = {onSearch} sort = {sort} SortBtnID = {SortBtnID} SearchValue={SearchValue} setSelectedEmp = {setSelectedEmp} selectedEmp = {selectedEmp} onDeleteClick = {onDeleteClick} setShowform = {setShowform}/>
            </Grid>
                
            <Grid item height='73vh' overflow='auto'>
                <EmpList employees = {employees} SearchValue = {SearchValue} SortBtnID = {SortBtnID} setSelectedEmp = {setSelectedEmp} selectedEmp={selectedEmp}/>
            </Grid>
        </Grid>
    )
}

export default Left;