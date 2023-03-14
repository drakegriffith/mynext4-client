import TopNav from "./components/TopNav";
import SideBar from "./components/SideBar";
import {useState, useRef} from 'react';


function Nav() {

    let sideNav = useRef(null);
    let topNav = useRef(null);
    const [lightMode, setLightMode] = useState([true]);

    function switchModes() {
        setLightMode((prevState) => !prevState)
      };

    return (

        // <section style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>

        <div style = {{position: 'absolute', top: 0, left: 0, width: '100%'}}>
    
    <div style={{position: 'absolute', top: 150, left: '1%'}} ref={el => sideNav = el}>
    
     
    </div>

    <div style={{position: 'absolute', width: '100%'}} ref={el => topNav = el}>
        <TopNav />
    </div>

    </div>



// </section>
    );
};

export default Nav;