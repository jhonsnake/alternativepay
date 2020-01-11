import React from 'react'

function Logo({img}) {
    return (
        <div>
            <img  className="logo" src={img} alt="logo"/>
        </div>
    )
}

export default Logo
