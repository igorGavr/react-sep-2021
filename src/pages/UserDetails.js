import {useLocation, useParams} from "react-router-dom";

export default function UserDetails() {

    let {state: user} = useLocation();
    console.log();
    // let params = useParams();
    // console.log(params);


    return (
        <div>
            {
                JSON.stringify(user)

            }


        </div>
    );
}
