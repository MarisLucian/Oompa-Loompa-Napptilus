import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css';

function Header() {


return (
    <div className='App-header'>
        <div className = 'navbar'>
            <Link to="/">
        <div className = 'logo'>
            <img  src = 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png' alt = 'logo' />
            </div>
            
        <div className='text'>Oompa Loompa´s Crew</div>
        </Link>
        </div>
       
        
        </div>
  
   
    
);
}

export default Header;