const User = ({user:{id, name, email}, getUserId}) => {
    return (
        <div>
            {id}--{name}--{email}
            <button onClick={()=>getUserId(id)}>getId</button>
        </div>
    );
};

export default User;
