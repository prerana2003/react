import './components.css'
import { Drawer} from '@mui/material';
import Left from './left';
import {Toolbar} from '@mui/material';

const MyDrawer = ({employees, setSelectedEmp, selectedEmp, onDeleteClick, setShowform, onSetFormState}) =>{
 
    return(
        <Drawer variant="permanent" elevation={4} sx={{display: { xs: 'none', sm: 'block' },
          }}open  overflow='none' style={{width: '100%', zIndex: 1, position:'relative'}}>
            <Toolbar />
            <Left employees={employees} setSelectedEmp= {setSelectedEmp} selectedEmp={selectedEmp} onDeleteClick={onDeleteClick} setShowform={setShowform} onSetFormState={onSetFormState}/>
        </Drawer>
    )
}

export default MyDrawer;