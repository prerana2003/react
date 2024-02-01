import mainLogo from './logo.png'
import './components.css'

const Header = ({employees}) =>{
    return(
        <nav>
            <div id='header'>
                <img  src={mainLogo} id='logo' alt="fireSpot"/>
                <label id='empCount'> Employees: {employees.length}</label>
            </div>
            <hr/>
        </nav>
    )
}

export default Header;