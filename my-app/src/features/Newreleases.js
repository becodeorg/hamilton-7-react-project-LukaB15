import React from "react";
import "./Newreleases.css";
import {Link} from "react-router-dom";

function Newreleases({data}) {
    // console.log(data.id);
    // return (
    //     <>
    //         <h1>New releases of the year</h1>
    //         <div className={"newreleases__container"}>
    //             {data.map(item => (
    //                 <div className={"newreleases__container"} key={item.id}>
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
            <h1>New releases of the year</h1>
            <div className={"results-container"}>
                <ul>
                    {data.map(game => (
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

export default Newreleases;
