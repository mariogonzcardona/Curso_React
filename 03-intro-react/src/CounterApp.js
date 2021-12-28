import React,{useState} from "react";
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    // Hooks - useState - useEffect - useRef - useContext - useReducer - useCallback - useMemo - useDebugValue
    const [counter,setCounter]=useState(value);

    // Handler for the increment button
    const handleAdd = () => setCounter(counter+1);
    const handleSubstract = () => setCounter(counter-1);
    const handleReset = () => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>
        </>
    ); 
}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};
CounterApp.defaultProps = {
    value: 10
}
export default CounterApp;