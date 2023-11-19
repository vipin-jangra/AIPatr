import { useState } from 'react';
import './Navbar.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { KeyboardArrowUp } from '@mui/icons-material';


const Navbar = (()=>{
    const [isShown, setIsShown] = useState(false);
    const [isContentVisible, setContentVisible] = useState(true);

    const handleClickDesk = ()=>{
        setContentVisible(current => !current);
    }

  const handleClick = () => {
    setIsShown(current => !current);
  };
    return <>
        <div className="Navbar">
            <div className="Nav-container">
                <div className="Logo">
                        <h2 className='bold'>AIPatrn</h2>
                </div>
                
                <div style={{visibility:isContentVisible ? "visible" : "hidden"}} className="Content">
                <ul>
                    <li>About us</li>
                    <li>Features</li>
                    <li>Collection-2023</li>
                    <li>Career</li>
                </ul>
                <ul>  
                    <li className='bold'>Home page</li>
                    <li>Generator</li>
                    <li>Pricing plan</li>
                    <li>Blog - News</li>
                </ul>
                </div>
                <div className="Buttons-desk">
                    <button className='menu-btn'  onClick={handleClickDesk}>Menu <span>{!isContentVisible ? <KeyboardArrowDownIcon fontSize='small'/> : <KeyboardArrowUp fontSize='small'/>}</span></button>
                </div>
                <div className="Buttons">
                    <button className='menu-btn'  onClick={handleClick}>Menu <span><KeyboardArrowDownIcon fontSize='small'/></span></button>
                </div>
            </div>
        </div>
        {isShown && ( <div className='mob-view'>
            <div className='nav-items'>
                <ul>  
                    <li className='bold'>Home page </li>
                    <li>Generator</li>
                    <li>Pricing plan</li>
                    <li>Blog - News</li>
                </ul>

                <ul>
                    <li>About us</li>
                    <li>Features</li>
                    <li>Collection-2023</li>
                    <li>Career</li>
                </ul> 
            </div>
        </div>)}
       
    </>
});

export default Navbar;