import React from 'react';
import { BrandSafari, GridDots, Home2} from 'tabler-icons-react';
import '../Nav.css';

function SideBar() {
    return (
        <div className='side-bar'> 
            <div>
                <Home2 width={40} />
                </div>
            <div>
                <BrandSafari  width={40} />
                </div>
            <div> 
                <GridDots width={40} />
                </div>
            </div>
    )
}

export default SideBar;