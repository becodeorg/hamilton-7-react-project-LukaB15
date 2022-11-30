import React from "react";
import "./Newreleases.css";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Titresection = styled.h1`
    border-radius: 3px;
    color: white;
    font-family: gamingTitle2;
    font-size: 35px;
    margin-bottom: 60px;
    margin-top: 60px;
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
const PlateformsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    font-size: 18px;
    color: #004d90;
    font-family: "Sono", sans-serif;
    margin: 1px;
    text-align: center;
`;
const GenresList = styled.div`
    display: flex;
    margin: 0;
    font-size: 18px;
    color: #004d90;
    font-family: "Sono", sans-serif;
    margin: 1px;
    text-align: center;
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
function Newreleases({data}) {
    return (
        <>
            <Titresection>New released Games</Titresection>
            <div className={"card-bck"}>
                <Container>
                    {data.map(game => (
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
                                        {game.platforms.map(
                                            p => `| ${p.platform.name} | `,
                                        )}
                                    </PlateformsList>
                                    <TitreGenres> Genres(s) :</TitreGenres>
                                    <GenresList>
                                        {game.genres.map(p => `| ${p.name} | `)}
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

export default Newreleases;
