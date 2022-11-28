import React from "react";
import {Link} from "react-router-dom";

function Nextweek({nxtweek}) {
    // return (
    //     <>
    //         <h1>Next week released</h1>
    //         <div className={"nextweekrelease__container"}>
    //             {nxtweek.map(item => (
    //                 <div className={"nextweekrelease__elements"} key={item.id}>
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
            <h1>Next week released</h1>
            <div className={"nextweekrelease__container"}>
                <ul>
                    {nxtweek.map(game => (
                        <li key={game.id}>
                            <Link
                                to={{
                                    pathname: `/Game/${game.id}`,
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

export default Nextweek;
