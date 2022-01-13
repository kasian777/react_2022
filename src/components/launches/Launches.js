import {useState, useEffect} from "react";

import Launch from "./Launch";

const Launches = () => {
    const [launch, setLaunch] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setLaunch(value.filter(value => value.launch_year != 2020)));
    }, [])

    return (
        <div>
            {launch.map(value => <Launch key={value.id} mission_name={value.mission_name}
                                         launch_year={value.launch_year}
                                         mission_patch_small={value.links.mission_patch_small}/>)}
        </div>
    )
}
export default Launches;