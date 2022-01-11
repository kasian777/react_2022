import './comment.css'
const  Comment = (props)=> {
    const {id,name,email,body}= props;
    return (
        <div className={'comment'}>

            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>

        </div>
    )
}
export default Comment;