import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === 'buy_ingedients') return {money: state.money - 10};
    if (action.type === 'sell_a_meal') return {money: state.money + 10};
    if (action.type === 'celebraty_visit') return {money: state.money + 1000};
    return state;
}
function Wallet() {
    const initalState = {money: 100};
    const [state, dispatch] = useReducer(reducer, initalState)
    return (
        <div className="Wallet">
            <h2>Wallet: {state.money}</h2>
            <div>
                <button onClick={() => dispatch({type: 'buy_ingedients'})}>Shopping for veggies!</button>
                <button onClick={() => dispatch({type: 'sell_a_meal'})}>Serve a meal to the customer</button>
                <button onClick={() => dispatch({type: 'celebraty_visit'})}>Celebraty visit</button>
            </div>
        </div>
    );
}

export default Wallet;
