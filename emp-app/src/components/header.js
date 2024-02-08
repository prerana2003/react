import logo from './logo.png'
import smallLogo from './smallLogo.png'
import './components.css'
import { AppBar } from '@mui/material'
import {Toolbar} from '@mui/material'
import {Typography} from '@mui/material'
import {Box} from '@mui/material'



const Header = ({employees}) =>{
    return(
        <AppBar component="nav" sx={{backgroundColor: 'white', position: 'sticky'}}>
            <Toolbar>
                <Box component='div' sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block' }}}>
                    <img  src={logo} id='logo' alt="fireSpot" style={{height:70}}/>
                </Box>
                <Box component='div' sx={{ flexGrow: 2, display: { xs: 'block', sm: 'none' } }}>
                    <img  src={smallLogo} id='logo' alt="fireSpot" style={{height:70}}/>
                </Box>
                <Box >
                    <Typography variant="h6" sx={{ my: 2, color: "black"}}>
                        Employees: {employees.length}
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
        // <nav>
        //     <div id='header'>
        //         <img  src={mainLogo} id='logo' alt="fireSpot"/>
        //         <label id='empCount'> Employees: {(employees)? employees.length : ''}</label>
        //     </div>
        //     <hr/>
        // </nav>
    )
}

export default Header;

