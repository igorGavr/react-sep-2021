const My = (prop) => {
    const children = prop.children;
    return (
        <div>
            {children[0].name}
            {children[1]}
        </div>
    );
};

export default My;
