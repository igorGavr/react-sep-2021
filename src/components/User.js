import {Link, useNavigate} from "react-router-dom";

export default function User(props) {
    let {item} = props;
    let {name, id} = item;
    let navigate = useNavigate();

    return (
        <div>
            {id}-{name}-
            <button>
                <Link
                    to={id.toString()}
                    state={item}> details about user</Link>
            </button>

            {/*<button><Link to={`/layout/users/${id}/posts`}>posts of this user</Link></button>*/}

            <button onClick={() => {
                navigate(`${id}/posts`, {state: 'asdqew'});
            }}>posts of this user
            </button>

        </div>
    );
}
