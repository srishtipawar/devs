import React from 'react';
import useCustomCount from './Custom';

import { useState, useCallback} from "react";

function useToggle({state = false}){
    // Initialize the state
    const [newstate, setNewstate] = useState(state);
    
    // Define and memorize toggler function in case we pass down the comopnent,
    // This function change the boolean value to it's opposite value
    const toggle = useCallback(() => setNewstate(newstate => !newstate), []);
    return [newstate, toggle]
}

function Display(){
    const data = useCustomCount();
    const [isTextChanged, setIsTextChanged] = useToggle(false);
    
    return(
        <div>
            <h1>Count:{data.count}</h1>
        <button onClick={data.handle}>Increment</button>
        <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
        </div>
        
    )
}
export default Display;