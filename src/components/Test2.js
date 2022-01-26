import {useEffect, useState} from "react";

const Test2 = () => {
    console.log('constructor');
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('componentDidMount');
        return ()=>{
            console.log('componentWillUnmount');
        }
    },[])

    useEffect(()=>{
        console.log('componentDidUpdate');
    },[count])

    return (
        <div>
            {console.log('render')}
            <div>{count}</div>
            <button onClick={()=>setCount(prevState => prevState+1)}>Inc</button>
        </div>
    );
};

export {Test2};
