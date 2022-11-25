import React from "react";
import {Link} from "react-router-dom";
// import Game from "../pages/Game";

export default function Results(gameResults) {
    console.log(gameResults.gameResults);
    return (
        <div className={"results-container"}>
            <ul>
                {gameResults.gameResults.map(game => (
                    <li key={game.id}>
                        <Link
                            to={{
                                pathname: `/Game/${game.name}`,
                                state: game,
                                gameProps: {
                                    game: game,
                                },
                            }}>
                            <h3>{game.name}</h3>
                            <img src={game.background_image} alt={"game"} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
