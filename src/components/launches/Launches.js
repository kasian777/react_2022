import {useState,useEffect} from "react";

import Launch from "./Launch";
const Launches = () => {
    const [Launch, setLaunch] = useState([])
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setLaunch(value))
    },[])
    return (<div>
        {Launch.map(value => <Launch key={value.launch_year} mission_name={value.mission_name} launch_year={value.launch_year} mission_patch={value.mission_patch}/>) }
    </div>)
}
export default Launches;