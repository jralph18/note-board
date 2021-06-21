import React, { Component, useEffect, useState } from 'react';

const Count = () => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0
    //     }
    // }
    const [count, setCount] = useState(0);
    const [str, setStr] = useState('Count');

    const countUp = () => {
        setCount(count+1);
    }
    const countDown = () => {
        setCount(count-1);
    }

    useEffect(() => {
        console.log("Component did mount");
    }, [])

    useEffect(() => {
        console.log("Component did update");
    }, )
        return(
            <div>
                <h1>{str}:</h1>
                <h2>{count}</h2>
                <button onClick={countDown}>down</button>
                <button onClick={countUp}>up</button>
            </div>
        )
    
}

export default Count;