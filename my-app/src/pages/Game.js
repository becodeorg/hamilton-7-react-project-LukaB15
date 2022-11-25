import React from "react";
// import Results from "../features/Results";

export default function Game(props) {
    console.log(props);
    const {game} = props.location.gameProps;
    return (
        <div>
            <h1>{game.name}</h1>
            <p>released : {game.released}</p>
            <p>Rating : {game.rating}</p>
            <h3>Genre(s):</h3>
            {game.genres.map(g => `${g.name} | `)}
            <h3>Plateform(s) :</h3>
            {game.platforms.map(p => `${p.platform.name} | `)}
            <ul>
                {game.short_screenshots.map(ss => (
                    <li key={ss.id}>
                        <img src={ss.image} alt={"screenshot"} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
