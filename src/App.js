import Form from "./components/Form";
import Form2 from "./components/Form2";
import {useEffect, useState} from "react";
import {set} from "react-hook-form";

function App() {

    let [counter, setCounter] = useState({val: 0});

    useEffect(() => {
        console.log('use effect');
        return () => {
            console.log('safdhgafsd')
        }
    }, [counter]);
    return (
        <div>
            <button onClick={
                () => {
                    counter.val++;
                    setCounter({...counter});
                }
            }>
                increment {counter.val}
            </button>

            {/*<Form/>*/}
            {/*<hr/>*/}
            {/*<Form2/>*/}
        </div>
    );
}

export default App;
