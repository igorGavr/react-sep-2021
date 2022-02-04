import {FC} from 'react';
import {IPost} from '../../interfaces';

const Post: FC<{ post: IPost }> = ({post:{id, userId, title, body}}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{userId}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export {Post};
