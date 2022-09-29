import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'
import OptionCoin from './OptionCoin'
import Result from './Result'
import '../App.css'

const Fight = () => {
    const { playerPick } = useContext(AppContext)
    const [showResult, setShowResult] = useState(false)
    const [result, setResolut] = useState('')
    const [aiPick, setAiPick] = useState('')
    const getResult = (aiPick, userPick) => {
        switch (true) {
            case aiPick === userPick:
                return 'DRAW'
            case (aiPick === 'paper' && userPick === 'rock') ||
                (aiPick === 'scissors' && userPick === 'paper') ||
                (aiPick === 'rock' && userPick === 'scissors'):
                return 'LOSS'
            case (userPick === 'paper' && aiPick === 'rock') ||
                (userPick === 'scissors' && aiPick === 'paper') ||
                (userPick === 'rock' && aiPick === 'scissors'):
                return 'WIN'
            default:
                break
        }
    }
    const generateAiPick = () => {
        const optionsArray = ['paper', 'rock', 'scissors']
        const randomChoice = Math.trunc(Math.random() * 3)
        const aiChoice = optionsArray[randomChoice]
        setResolut(() => getResult(aiChoice, playerPick))
        setShowResult(true)
        setAiPick(aiChoice)
    }
    useEffect(() => {
        generateAiPick()
    }, [playerPick])

    return (
        <section className="fight">
            <div className={`pick pick--player ${showResult && 'animated'}`}>
                <span>you picked</span>
                <OptionCoin optionType={playerPick} />
            </div>
            <div className={`pick pick--ai ${showResult && 'animated'}`}>
                <span>the house picked</span>
                <div className="placeholder"></div>
                <OptionCoin optionType={aiPick} />
            </div>
            {showResult && <Result result={result} />}
        </section>
    )
}

export default Fight
