import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'
import rulesImg from '../images/image-rules.svg'

const Rules = () => {
    const { openRules, setOpenRules } = useContext(AppContext)
    useEffect(() => {
        console.log(openRules)
    }, [openRules])
    return (
        <div className={`rules-modal ${!openRules && 'hidden'}`}>
            <div className="modal-title">
                <span>rules</span>
                <button className="close-modal" onClick={() => setOpenRules(false)}>{`&#x2715`}</button>
            </div>
            <img src={rulesImg} alt="rules"></img>
        </div>
    )
}

export default Rules
