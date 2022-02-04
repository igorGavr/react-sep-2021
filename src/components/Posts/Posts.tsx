import {FC, useEffect, useState} from 'react';

import {IPost} from '../../interfaces';
import {postService} from '../../services';
import {Post} from '../Post/Post';

const Posts: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        (
            async () => {
                const {data} = await postService.getAll();
                setPosts(data)
            }
        )()
        // (
        //     async () => {
        //         const {data} = await userService.getAll();
        //         setUsers(data)
        //     }
        // )()
    }, [])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
