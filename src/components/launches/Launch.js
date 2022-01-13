// import 'Launches.css'

const Launch = (props) => {
    const {mission_name, launch_year, mission_patch } = props;
    return (
        <div>
            <div>mission_name:{mission_name}</div>
            <div>launch_year:{launch_year}</div>
           <div>mission_patch:{mission_patch}<img src="link.mission_patch" alt=""/></div>
        </div>
    )

}
export default Launch;