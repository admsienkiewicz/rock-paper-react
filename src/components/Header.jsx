import React from 'react'
import Scorebox from './Scorebox'

const Header = () => {
    return (
        <header>
            <h1>
                <span>Rock</span>
                <span>Paper</span>
                <span>Scissors</span>
            </h1>
            <Scorebox />
        </header>
    )
}

export default Header
