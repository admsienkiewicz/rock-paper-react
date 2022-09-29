import OptionCoin from './OptionCoin'

const GameBox = () => {
    return (
        <section className={`options`}>
            <OptionCoin optionType="paper" />
            <OptionCoin optionType="rock" />
            <OptionCoin optionType="scissors" />
        </section>
    )
}

export default GameBox
