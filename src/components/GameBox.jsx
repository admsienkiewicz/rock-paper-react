import React, { useContext } from 'react'
import { AppContext } from '../App'
import OptionCoin from './OptionCoin'

const GameBox = () => {
    const { playerPick } = useContext(AppContext)
    return (
        <section className={`options ${playerPick && 'hidden'}`}>
            <OptionCoin optionType="paper" />
            <OptionCoin optionType="rock" />
            <OptionCoin optionType="scissors" />
        </section>
    )
}

export default GameBox
