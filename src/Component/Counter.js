import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { counterIncrement } from '../Services/Action/Action';
const Counter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h2 >This is Counter APP</h2>
            <h3>Count:{count}</h3>
            <button onClick={() => dispatch(counterIncrement())}>Increment</button>
        </div>
    );
};

export default Counter;