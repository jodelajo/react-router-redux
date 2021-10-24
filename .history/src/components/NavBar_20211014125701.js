import React from "react";

const NavBar = () => {
    return(
        <nav className='ui raised very padded segment'>
            <a className='ui teal inverted segment'>Gloria</a>
            <div className='ui right floated header'>
                <button className='ui button'>
                    <a href="/">Home</a>
                </button>
            </div>
        </nav>
    )
}