import { Height } from '@mui/icons-material';

var mainLogo = require('./logo.png');

const Header = () =>{
    return(
        <nav>
            <div>
                <img  src={mainLogo} id='logo' alt="fireSpot"/>
                <label>Hello</label>
            </div>
        </nav>
    )
}

export default Header;