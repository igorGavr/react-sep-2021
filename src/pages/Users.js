import {useEffect, useState} from "react";
import User from "../components/User";
import {Outlet} from "react-router-dom";

export default function Users() {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value]);
            });
    }, []);

    return (
        <div>

            {
                users.map(value => <User key={value.id} item={value}/>)
            }

            <Outlet/>


        </div>
    );
}
