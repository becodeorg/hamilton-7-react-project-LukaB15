import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
// import Results from "../features/Results";

export default function Game() {
    const {id} = useParams();
    console.log(id);
    const [onegame, setonegame] = useState([]);

    useEffect(() => {
        const fetchData3 = async () => {
            const result = await axios(
                `https://api.rawg.io/api/games/${id}?key=678cfdbc0bb64f1fa15d4409fc3d8131`,
            );
            const dataweek = result.data;
            setonegame(dataweek);
        };
        fetchData3();
    }, []);
    console.log(onegame.genres);
    return (
        <div>
            <h1>{onegame.name}</h1>
            <p>released : {onegame.released}</p>
            <p>Rating : {onegame.rating}</p>
            {/* <h3>Genre(s):</h3>
            {onegame.genres.map(g => `${g.name} | `)} */}
            {/* <h3>Plateform(s) :</h3>
            {onegame.platforms.map(p => `${p.platform.name} | `)}
            <ul>
                {onegame.short_screenshots.map(ss => (
                    <li key={ss.id}>
                        <img src={ss.image} alt={"screenshot"} />
                    </li>
                ))}
            </ul> */}
        </div>
    );
}
