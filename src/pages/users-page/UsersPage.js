import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export function UsersPage() {

    let {users, isUsersLoading} = useSelector(state => state.usersReducer);

    let dispatch = useDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                dispatch({type: 'START_USER_LOADING'});
                try {
                    dispatch({type: 'LOAD_USERS', payload: value});
                } catch (e) {
                    console.log(e);
                } finally {
                    dispatch({type: 'END_USER_LOADING'});
                }
            });
    }, []);
    return (
        <div>
            {
                isUsersLoading && <h3 style={{color: 'red'}}>Loading ...</h3>
            }

        </div>
    );
}
