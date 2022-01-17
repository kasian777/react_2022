export default function UserComponent({item, ChooseUser}) {

    return (<div>

        <h2>{item.id}-{item.name}</h2>
        <button onClick={() => {
            ChooseUser(item.id)
        }}>Details
        </button>

    </div>);

}