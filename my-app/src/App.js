import React, {useEffect, useState, Fragment} from "react";
import axios from "axios";
import Newreleases from "./features/Newreleases";
import Populargames from "./features/Populargames";
import Nextweek from "./features/Nextweek";
// import Nav from "./features/Nav";
import "./App.css";
import {Route, Routes} from "react-router";
import Game from "./pages/Game";
import Search from "./features/Search";
import Nav from "./features/Nav";
import Formfilter from "./features/Formfilter";

function App() {
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
    // console.log(startdate.toISOString().split("T")[0]);
    const enddate = getNextMondayend(new Date());
    // console.log(enddate.toISOString().split("T")[0]);
    const start = startdate.toISOString().split("T")[0];
    const end = enddate.toISOString().split("T")[0];
    // console.log(start);
    // console.log(end);

    //NEW RELEASES
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData1 = async () => {
            const result = await axios(
                "https://api.rawg.io/api/games?key=678cfdbc0bb64f1fa15d4409fc3d8131&dates=2022-01-01,2022-12-30",
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
                "https://api.rawg.io/api/games?key=678cfdbc0bb64f1fa15d4409fc3d8131&metacritic=80,100",
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
                `https://api.rawg.io/api/games?key=678cfdbc0bb64f1fa15d4409fc3d8131&dates=${start},${end}`,
            );
            // console.log(end);
            // console.log(start);
            const dataweek = result.data;
            // console.log(result.data.results);
            const games = dataweek.results;
            setNextweek(games);
        };
        fetchData3();
    }, []);

    //All GAMES
    const [allgames, setallgames] = useState([]);

    useEffect(() => {
        const fetchData4 = async () => {
            const result = await axios(
                `https://api.rawg.io/api/games?key=678cfdbc0bb64f1fa15d4409fc3d8131`,
            );
            // console.log(end);
            // console.log(start);
            const dataweek = result.data;
            // console.log(result.data.results);
            const games = dataweek.results;
            setallgames(games);
        };
        fetchData4();
    }, []);
    return (
        <>
            <Nav />
            <Search />
            <Routes>
                <Route
                    path={"/Game/:name"}
                    element={<Game authed={true} allgames={allgames} />}
                />
                <Route path={"/Formfilter"} element={<Formfilter />} />
            </Routes>
            <Nextweek nxtweek={nxtweek} />
            <Newreleases data={data} />
            <Populargames popular={popular} />
        </>
    );
}

export default App;
