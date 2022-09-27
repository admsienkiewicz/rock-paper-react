import React, { useContext } from 'react'
import { AppContext } from '../App'

function Result({ result }) {
    const { setPlayerPick, setScore } = useContext(AppContext)
    const updateScore = () => {
        if (result === 'WIN') {
            setScore((prev) => prev + 1)
        }
        if (result === 'LOSS') {
            setScore((prev) => prev - 1)
        }
    }
    return (
        <div className="result-container">
            <span className="result--message">{result}</span>
            <button
                className="btn-play-again"
                onClick={() => {
                    setPlayerPick('')
                    updateScore()
                }}
            >
                play again
            </button>
        </div>
    )
}

export default Result
