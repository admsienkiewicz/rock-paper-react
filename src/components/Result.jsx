import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AppContext } from '../App'

function Result({ result }) {
    const navigate = useNavigate()
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
                    navigate('/')
                }}
            >
                play again
            </button>
        </div>
    )
}

export default Result
