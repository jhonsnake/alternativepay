import React from 'react'

function Navbar() {
    return (
        <div className="nav">
                <ul className="nav__list">
                    <li className="nav__item font--bold"> 
                    <div className="usuario">
                    <i className="material-icons md-light">person</i><p>Cerrar sesión</p>
                    </div>
                    </li>
                    <li className="nav__item">
                        <select>
                            <option value="español">Español</option>
                            <option value="english">English</option>
                            <option value="francois">François</option>
                        </select>
                    </li>
                </ul>
            </div>
    )
}

export default Navbar
