import React, { useContext } from 'react'
import { AppContext } from '../App'

const OptionCoin = ({ optionType }) => {
    const { setPlayerPick, playerPick } = useContext(AppContext)
    return (
        <button
            className={`btn btn--${optionType}`}
            onClick={() => {
                if (playerPick === '') setPlayerPick(optionType)
            }}
        >
            <div className="btn-img-container">
                <img src={`../images/icon-${optionType}.svg`} alt={`${optionType}`} />
            </div>
        </button>
    )
}

export default OptionCoin
