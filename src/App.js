import {Test} from "./components/Test";
import {useState} from "react";
import {Test2} from "./components/Test2";

function App() {
    const [flag, setFlag] = useState(true);
    return (
        <>
            {flag && <Test2 sss={5}/>}
            <button onClick={() => setFlag(prev => !prev)}>Hide</button>
        </>
    );
}

export default App;
