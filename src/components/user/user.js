import './user.css'
const  User =
     ({user:{id, name, email}, getUserId})=>{
    return (
        <div>
            {id}__{name}__{email}

            <button onClick={()=>getUserId(id)}>getId</button>
        </div>
    )
}
export default User;