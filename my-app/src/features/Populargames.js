import React from "react";
import {Link} from "react-router-dom";

export default function Populargames({popular}) {
    // return (
    //     <>
    //         <h1>Popular games</h1>
    //         <div className={"populargames__container"}>
    //             {popular.map(item => (
    //                 <div className={"populargames__container"} key={item.id}>
    //                     <p>{item.name}</p>
    //                     <p>{item.released}</p>
    //                     <img
    //                         alt={"pictures of the game"}
    //                         src={item.background_image}
    //                     />
    //                 </div>
    //             ))}
    //         </div>
    //     </>
    // );
    return (
        <>
            <h1>Popular games</h1>
            <div className={"populargames__container"}>
                <ul>
                    {popular.map(game => (
                        <li key={game.id}>
                            <Link
                                to={{
                                    pathname: `/Game/${game.name}`,
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
        </>
    );
}
