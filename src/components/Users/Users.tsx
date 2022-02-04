import {FC, useEffect, useState} from 'react';
import {IUser} from '../../interfaces';
import {userService} from '../../services';
import {User} from '../User/User';

const Users: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(()=>{
        const getAllUsers = async () => {
          const {data} = await userService.getAll();
          setUsers(data)
        }
        getAllUsers()
    },[])

    const someFunc = (num:number):IUser => {
      return {id:33, name:'Vasia', username:'sdfsdf', email:'sdfsdfsf'}
    }

    return (
        <div>
            {users.map(user => <User key={user.id} getUser={someFunc} user={user}/>)}
        </div>
    );
};

export {Users};
