import {useState} from "react";

export default function Form() {


    let [formState, setFormState] = useState({username: '', age: 0});

    const onSubmitForm = (eventObject) => {
        eventObject.preventDefault();
        let username = eventObject.target.username.value;
        let age = eventObject.target.age.value;
        console.log(username, age);
        //  create object todo send data to api || create object  based on data and push it to array || filter


    }

    // const onUsernameChange = (e) => {
    //     console.log(e.target.name);
    //     setFormState({...formState, username: e.target.value});
    // }
    //
    // const onAgeChange = (e) => {
    //     console.log(e.target.name);
    //     setFormState({...formState, age: e.target.value});
    // }

    const onChangeInputState = (e) => {

        setFormState({...formState, [e.target.name]: e.target.value});
        console.log(formState);
    };


    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input type="text"
                       name={'username'}
                       value={formState.username}
                       onChange={onChangeInputState}/>

                <input type="number"
                       name={'age'}
                       value={formState.age}
                       onChange={onChangeInputState}
                />

                <button>send</button>
                <div>
                    {JSON.stringify(formState)}

                </div>
            </form>


        </div>
    );
}
