import {useForm} from "react-hook-form";

export default function Form2() {

    let hookForm = useForm();
    console.log(hookForm);
    let {register, handleSubmit, watch} = hookForm;
    let watchAllFields = watch(['username', 'age']);
    console.log(watchAllFields);


    const onSubmitForm = (data) => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <input type="text"  {...register('username')} defaultValue={'def'}/>
                <input type="number" {...register('age')} defaultValue={-999}/>
                <input type="text" {...register('password')} defaultValue={''}/>
                <button>send</button>

            </form>

        </div>
    );
}
