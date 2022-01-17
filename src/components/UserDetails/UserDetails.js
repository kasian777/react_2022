const UserDetails = ({user, getUserId}) => {
  const {id, name, username, email} = user;
  return (
      <div>
          <div>{id}</div>
          <div>{name}</div>
          <div>{username}</div>
          <div>{email}</div>
      </div>
  )
};
export default UserDetails