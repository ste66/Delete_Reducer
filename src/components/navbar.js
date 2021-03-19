import React from 'react';


function Navbar(props){
    return(
    <div>

        <h2 className="navbar" style={{backgroundColor:"orange", width:"100%", height:'50px'}}>{props.title}</h2>

    </div>

    )
}


export default Navbar;