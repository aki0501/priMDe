
import React from "react";
import Map from './Home/Map'
import NameForm from "./Home/Form";
// import './Home.css'
import MapContainer from "./gMap";
import { useState } from "react";

// import Autocomplete from "./Autocomplete";

const Home = () => {
    const [rightElement, setRight] = useState(<NameForm />)

    return (
        <div>
            <button onClick={() => { setRight(<NameForm />) }}>Share your experience!</button>
            <div className="items">
                <MapContainer setter={setRight} />
                {rightElement}
            </div>
        </div>
    )
}

export default Home