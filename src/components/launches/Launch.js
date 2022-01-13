

const Launch = (props) => {
    const {mission_name, launch_year, mission_patch_small } = props;
    return (
        <div>
            <div>mission_name:{mission_name}</div>
            <div>launch_year:{launch_year}</div>
           <img src={mission_patch_small} alt=""/>
        </div>
    )

}
export default Launch;