const  Post = (props)=> {
    const {id,title,body}= props;
    return (
        <div className={'post'}>

            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>

        </div>
    )
}
export default Post;