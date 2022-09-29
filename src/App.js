import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Figth from './components/Fight'
import Footer from './components/Footer'
import GameBox from './components/GameBox'
import Header from './components/Header'
import Rules from './components/Rules'

export const AppContext = createContext()

function App() {
    const [score, setScore] = useState(0)
    const [openRules, setOpenRules] = useState(false)
    const [playerPick, setPlayerPick] = useState('')

    return (
        <AppContext.Provider value={{ score, setScore, setOpenRules, openRules, playerPick, setPlayerPick }}>
            <Header />
            <Rules />
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<GameBox />} />
                        <Route path="/fight" element={<Figth />} />
                    </Routes>
                </BrowserRouter>
            </main>
            <button className="btn-rules" onClick={() => setOpenRules(true)}>
                rules
            </button>
            <Footer />
        </AppContext.Provider>
    )
}

export default App
