import {FC} from 'react';
import {IUser} from '../../interfaces';

interface IProps {
    user: IUser
    getUser:(mum:number)=>IUser
}

const User: FC<IProps> = ({user: {id, name, username, email}}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
        </div>
    );
};

export {User};
