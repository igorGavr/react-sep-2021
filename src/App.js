import {Cars} from "./components";
import {Form} from "./components/Form/Form";
import {useSelector} from "react-redux";

const App = () => {
    const {users} = useSelector(state => state.users);
    return (
        <div>
            <Form/>
            <Cars/>
            {users.map((user, index) => <div key={index}>{user}</div>)}
        </div>
    );
};

export default App;
