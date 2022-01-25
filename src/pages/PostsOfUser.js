import {useLocation, useParams} from "react-router-dom";
import {useEffect} from "react";

export default function PostsOfUser() {
    let {id} = useParams();
    console.log(useLocation());
    console.log(id);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
            .then(value => value.json())
            .then(value => {
                console.log(value);
            });
    }, [id])

    return (
        <div>
            PostsOfUser

        </div>
    );
}
