import {useReducer} from "react";

const reducer = (state, action) => {
    state = {...state, count2: state.count2 + 1}
    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1}
        case 'dec':
            return {...state, count1: state.count1 - 1}
        case 'reset':
            return {...state, count1: action.payload}
        default:
            throw new Error('MyError')
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0});
    const click = () => {
        dispatch({type: 'inc'})
    }
    return (
        <div>
            <div>{state.count1}</div>
            <div>{state.count2}</div>
            <button onClick={click}>INC</button>
            <button onClick={() => dispatch({type: 'dec'})}>DEC</button>
            <button onClick={() => dispatch({type: 'reset4', payload: 8})}>RESET</button>
        </div>
    );
}

export default App;
