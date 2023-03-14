import React, { useState} from 'react';
import './dropdownmenu.css'

function DropdownMenu() {
    const [state, setState] = useState(false);
    function handleClick() {
        setState(!state);
    }
    return (
        <div className='link'>
        <span onClick={handleClick}> Click </span>
        <div className={`menu ${state ? 'open' : ''}`}>
            <ul>
                <li> Dashboard </li>
                <li> Test3 </li>
            </ul>
        </div>
</div>
    )
}

export default DropdownMenu;