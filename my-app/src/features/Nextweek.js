import React from "react";
import {Link} from "react-router-dom";
import "./nextweek.css";
import styled from "styled-components";

function Nextweek({nxtweek}) {
    const Titresection = styled.h1`
        border-radius: 3px;
        color: #ff5400;
        font-family: gamingTitle2;
        font-size: 35px;
        margin-bottom: 60px;
        letter-spacing: 5px;
        text-align: center;
    `;
    const Titre = styled.h3`
        border-radius: 3px;
        color: #ff5400;
        font-family: gamingTitle2;
        font-size: 18px;
        margin-bottom: 35px;
        margin-left: auto;
        margin-right: auto;
        letter-spacing: 5px;
        text-align: center;
        max-width: 300px;
        max-height: 100px;
    `;
    const Titreplatforms = styled.h3`
        border-radius: 3px;
        color: #ff5400;
        font-family: gamingTitle2;
        font-size: 15px;
        margin-bottom: 5px;
        margin-left: auto;
        margin-right: auto;
        letter-spacing: 5px;
        text-align: center;
        max-width: 300px;
        max-height: 100px;
    `;
    const TitreGenres = styled.h3`
        border-radius: 3px;
        color: #ff5400;
        font-family: gamingTitle2;
        font-size: 15px;
        margin-bottom: 5px;
        margin-left: auto;
        margin-right: auto;
        letter-spacing: 5px;
        text-align: center;
        max-width: 300px;
        max-height: 100px;
    `;

    const Container = styled.ul`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        list-style: none;
        margin-left: 110px;
        margin-right: 110px;
    `;
    const Plateforms = styled.p`
        font-size: 18px;
        color: #004d90;
        font-family: "Sono", sans-serif;
        margin: 1px;
    `;
    const Genres = styled.p`
        font-size: 18px;
        color: #004d90;
        font-family: "Sono", sans-serif;
        margin: 1px;
    `;
    const PlateformsList = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0;
    `;
    const GenresList = styled.div`
        display: flex;
        margin: 0;
    `;
    const Card = styled.div`
        background-color: white;
        padding: 2rem 2rem;
        margin-bottom: 100px;
        width: 500px;
        height: 500px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        transition: 0.5s;
        &:hover {
            scale: 1.1;
            transition: 0.5s;
        }
    `;
    const ReleaseDate = styled.p`
        border-radius: 3px;
        color: #004d90;
        font-family: gamingTitle2;
        font-size: 12px;
        margin: 1px;
        letter-spacing: 5px;
        text-align: center;
    `;
    return (
        <>
            <Titresection>Next week released</Titresection>
            <div className={"card-bck"}>
                <Container>
                    {nxtweek.map(game => (
                        <li className={"list"} key={game.id}>
                            <Link
                                className={"link"}
                                to={{
                                    pathname: `/Game/${game.id}`,
                                    gameProps: {
                                        game: game,
                                    },
                                }}>
                                <Titre>{game.name}</Titre>
                                <Card className={"card"}>
                                    <img
                                        src={game.background_image}
                                        alt={"game"}
                                    />
                                    <ReleaseDate>{game.released}</ReleaseDate>
                                    <Titreplatforms>
                                        Plateform(s) :
                                    </Titreplatforms>
                                    <PlateformsList>
                                        {game.platforms.map(p => (
                                            <Plateforms key={game.id}>
                                                | {p.platform.name} |
                                            </Plateforms>
                                        ))}
                                    </PlateformsList>
                                    <TitreGenres> Genres(s) :</TitreGenres>
                                    <GenresList>
                                        {game.genres.map(g => (
                                            <Genres key={game.id}>
                                                | {g.name} |
                                            </Genres>
                                        ))}
                                    </GenresList>
                                </Card>
                            </Link>
                        </li>
                    ))}
                </Container>
            </div>
        </>
    );
}

export default Nextweek;
