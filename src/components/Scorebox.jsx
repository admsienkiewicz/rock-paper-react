import React, { useContext } from 'react'
import { AppContext } from '../App'

const Scorebox = () => {
    const { score } = useContext(AppContext)
    return (
        <div className="score-box">
            <span>score</span>
            <strong className="points">{score}</strong>
        </div>
    )
}

export default Scorebox
