import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";
import "./Game.css";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    flex-wrap: wrap;
    justify-content: center;
    background-color: white;
    width: 50%;
`;
const Titleegame = styled.h1`
    border-radius: 3px;
    color: #ff5400;
    font-family: gamingTitle2;
    font-size: 35px;
    margin-bottom: 60px;
    margin-top: 60px;
    letter-spacing: 5px;
    text-align: center;
`;
const ReleaseDate = styled.p`
    border-radius: 3px;
    color: #004d90;
    font-family: gamingTitle2;
    font-size: 20px;
    margin-bottom: 60px;
    letter-spacing: 5px;
    text-align: center;
`;
const Rating = styled.p`
    border-radius: 3px;
    color: #004d90;
    font-family: gamingTitle2;
    font-size: 20px;
    margin-bottom: 60px;
    letter-spacing: 5px;
    text-align: center;
`;
const Genres = styled.h3`
    border-radius: 3px;
    color: #ff5400;
    font-family: gamingTitle2;
    font-size: 20px;
    margin-bottom: 20px;
    letter-spacing: 5px;
    text-align: center;
`;
const Plateforms = styled.h3`
    border-radius: 3px;
    color: #ff5400;
    font-family: gamingTitle2;
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    letter-spacing: 5px;
    text-align: center;
`;
const GenresList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    font-size: 18px;
    color: white;
    font-family: "Sono", sans-serif;
    margin: 1px;
    color: #004d90;
`;
const PlateformsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    font-size: 18px;
    color: white;
    font-family: "Sono", sans-serif;
    margin: 1px;
    color: #004d90;
`;
const Pictures = styled.h3`
    border-radius: 3px;
    color: white;
    font-family: gamingTitle2;
    font-size: 20px;
    margin-bottom: 60px;
    letter-spacing: 5px;
    text-align: center;
`;
const PicturesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    font-size: 18px;
    color: white;
    font-family: "Sono", sans-serif;
    margin: 1px;
`;
const Back = styled.p`
    border-radius: 3px;
    color: white;
    background-color: #004d90;
    font-family: gamingTitle2;
    font-size: 20px;
    margin-bottom: 60px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    width: 30%;
    letter-spacing: 5px;
    text-align: center;
    transition: 0.3s;
    &:hover {
        color: #004d90;
        background-color: white;
        border: 1px solid #004d90;
        transition: 0.3s;
    }
`;

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
        <Container>
            {Object.entries(onegame).length && (
                <>
                    <Titleegame>{onegame.name}</Titleegame>
                    <ReleaseDate>released : {onegame.released}</ReleaseDate>
                    <Rating>Rating : {onegame.rating}</Rating>
                    <Genres>Genre(s):</Genres>
                    <GenresList>
                        {onegame.genres.map(g => `${g.name} | `)}
                    </GenresList>
                    <Plateforms>Plateform(s) :</Plateforms>
                    <PlateformsList>
                        {onegame.platforms.map(p => `${p.platform.name} | `)}
                    </PlateformsList>
                    <Pictures>Pictures</Pictures>
                    <PicturesList>
                        <img src={onegame.background_image} alt={"game"} />
                        <img
                            src={onegame.background_image_additional}
                            alt={"game"}
                        />
                    </PicturesList>
                    <Link className={"link"} to={{pathname: `/`}}>
                        <Back>Retour</Back>
                    </Link>
                </>
            )}
        </Container>
    );
}
