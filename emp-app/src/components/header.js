import mainLogo from './logo.png'
import './components.css'

const Header = ({state}) =>{
    return(
        <nav>
            <div id='header'>
                <img  src={mainLogo} id='logo' alt="fireSpot"/>
                <label id='empCount'> Employees: {Object.keys(state).length}</label>
            </div>
            <hr/>
        </nav>
    )
}

export default Header;