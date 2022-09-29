import React, { useContext } from 'react'
import { AppContext } from '../App'
import { useNavigate } from 'react-router-dom'

const OptionCoin = ({ optionType }) => {
    const { setPlayerPick, playerPick } = useContext(AppContext)
    const navigate = useNavigate()
    return (
        <button
            className={`btn btn--${optionType}`}
            onClick={() => {
                if (playerPick === '') {
                    setPlayerPick(optionType)
                    navigate('/fight')
                }
            }}
        >
            <div className="btn-img-container">
                <img src={`../images/icon-${optionType}.svg`} alt={`${optionType}`} />
            </div>
        </button>
    )
}

export default OptionCoin
