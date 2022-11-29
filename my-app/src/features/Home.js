import React, {useEffect, useState} from "react";
import axios from "axios";
import Newreleases from "./Newreleases";
import Populargames from "./Populargames";
import Nextweek from "./Nextweek";
import Results from "./Results";
import Title from "./Title";

export default function Home() {
    function getNextMondaystart(date = new Date()) {
        const dateCopy = new Date(date.getTime());
        const nextMonday = new Date(
            dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 1) % 7 || 7),
            ),
        );
        return nextMonday;
    }
    function getNextMondayend(date = new Date()) {
        const dateCopy = new Date(date.getTime());
        const nextMonday = new Date(
            dateCopy.setDate(
                dateCopy.getDate() + 6 + ((7 - dateCopy.getDay() + 1) % 7 || 7),
            ),
        );
        return nextMonday;
    }

    // 👇️ Get Monday of Next Week
    const startdate = getNextMondaystart(new Date());
    const enddate = getNextMondayend(new Date());
    const start = startdate.toISOString().split("T")[0];
    const end = enddate.toISOString().split("T")[0];

    //NEW RELEASES
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData1 = async () => {
            const result = await axios(
                "https://api.rawg.io/api/games?key=3b9e3e45a7494082aabf45c1bf5f08fa&dates=2022-01-01,2022-12-30",
            );
            const a = result.data;
            const games = a.results;
            setData(games);
        };

        fetchData1();
    }, []);

    //POPULAR GAME
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        const fetchData2 = async () => {
            const result = await axios(
                "https://api.rawg.io/api/games?key=3b9e3e45a7494082aabf45c1bf5f08fa&metacritic=80,100",
            );
            const a = result.data;
            const games = a.results;
            setPopular(games);
        };
        fetchData2();
    }, []);

    //NEXT WEEK
    const [nxtweek, setNextweek] = useState([]);

    useEffect(() => {
        const fetchData3 = async () => {
            const result = await axios(
                `https://api.rawg.io/api/games?key=3b9e3e45a7494082aabf45c1bf5f08fa&dates=${start},${end}`,
            );
            const dataweek = result.data;
            const games = dataweek.results;
            setNextweek(games);
        };
        fetchData3();
    }, []);
    const [gameResults, setGameResults] = useState([]);
    const returnResult = gameResult => {
        setGameResults(gameResult);
    };

    function display() {
        return (
            <>
                <Nextweek nxtweek={nxtweek} />
                <Newreleases data={data} />
                <Populargames popular={popular} />
            </>
        );
    }

    return (
        <>
            {/* <Nav /> */}
            <Title returnResult={returnResult} />
            {gameResults.length ? (
                <Results gameResults={gameResults} />
            ) : (
                display()
            )}
        </>
    );
}
