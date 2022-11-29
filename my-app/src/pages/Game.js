import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
// import Results from "../features/Results";

export default function Game() {
    const {id} = useParams();
    const [onegame, setonegame] = useState({});

    useEffect(() => {
        const fetchData3 = async () => {
            const result = await axios(
                `https://api.rawg.io/api/games/${id}?key=3b9e3e45a7494082aabf45c1bf5f08fa`,
            );
            const dataweek = result.data;
            setonegame(dataweek);
        };
        fetchData3();
    }, []);
    // console.log(onegame.genres);
    return (
        <div>
            {Object.entries(onegame).length && (
                <>
                    <h1>{onegame.name}</h1>
                    <p>released : {onegame.released}</p>
                    <p>Rating : {onegame.rating}</p>
                    <h3>Genre(s):</h3>
                    {onegame.genres.map(g => `${g.name} | `)}
                    <h3>Plateform(s) :</h3>
                    {onegame.platforms.map(p => `${p.platform.name} | `)}
                </>
            )}
        </div>
    );
}
