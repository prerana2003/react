import logo from './logo.png'
import smallLogo from './smallLogo.png'
import './components.css'
import { AppBar, Box, Grid } from '@mui/material'
import {Typography} from '@mui/material'
import React from 'react'
import {IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Left from './left'
import {Drawer} from '@mui/material'


const Header = ({employees, setSelectedEmp, selectedEmp, onDeleteClick, setShowform, onSetFormState}) =>{
    
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    
    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };
      
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
          setMobileOpen(!mobileOpen);
        }
    };


    return(
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" sx={{backgroundColor: 'white', position:"sticky", zIndex:2 }}>
                
                <Grid container padding={1.5} alignItems='center'>

                    <IconButton color="black" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>

                    <Grid item component='div' sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block' }}}>
                        <img  src={logo} id='logo' alt="fireSpot" style={{height:70}}/>
                    </Grid>

                    <Grid item component='div' sx={{ flexGrow: 2, display: { xs: 'block', sm: 'none' } }}>
                        <img  src={smallLogo} id='logo' alt="fireSpot" style={{height:70}}/>
                    </Grid>

                    <Grid item sx={{marginRight:'30px'}}>
                        <Typography variant="h6" sx={{color: "black"}}>
                            Employees: {employees.length}
                        </Typography>
                    </Grid>

                </Grid>
            </AppBar>

            <Drawer variant="temporary" open={mobileOpen} onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                sx={{display: { xs: 'block', sm: 'none' }}}>
                <Left employees={employees} setSelectedEmp= {setSelectedEmp} selectedEmp={selectedEmp} onDeleteClick={onDeleteClick} setShowform={setShowform} onSetFormState={onSetFormState}/>
            </Drawer>

        </Box>
    )
}

export default Header;

