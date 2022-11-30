import React, {useState} from "react";

export default function Formfilter() {
    const [DateS, setDateS] = useState("");
    const [DateE, setDateE] = useState("");
    const [Plateforms, setPlateforms] = useState("");
    const [Genres, setGenres] = useState("");
    const date_start = e => {
        setDateS(e.target.value);
    };
    const date_end = e => {
        setDateE(e.target.value);
    };
    const platforms = e => {
        setPlateforms(e.target.value);
    };
    const genres = e => {
        setGenres(e.target.value);
    };
    const Submit = () => {
        const released_start = DateS;
        const released_end = DateE;
        const platformgame = Plateforms;
        const genregame = Genres;
        fetch(
            `https://api.rawg.io/api/games?key=3b9e3e45a7494082aabf45c1bf5f08fa&dates=${released_start},${released_end}&platforms=${platformgame}&genres=${genregame}}`,
        )
            .then(resp => resp.json())
            .then(({results}) => {
                const a = results.results;
                console.log(a.name);
                return a;
            });
    };

    return (
        <>
            <form>
                <input
                    type={"date"}
                    id={"Released_date_end"}
                    name={"Released_date_end"}
                    value={"2022-12-01"}
                    min={"2000-01-01"}
                    max={"2022-12-31"}
                    onChange={date_start}
                />
                <input
                    type={"date"}
                    id={"Released_date_end"}
                    name={"Released_date_end"}
                    value={"2022-12-01"}
                    min={"2000-01-01"}
                    max={"2022-12-31"}
                    onChange={date_end}
                />
                <select
                    name={"platforms"}
                    id={"platforms-select"}
                    onChange={platforms}>
                    <option value={"4"}>PC</option>
                    <option value={"187"}>Playstation 5</option>
                    <option value={"18"}>Playstation 4</option>
                    <option value={"1"}>Xbox One</option>
                </select>
                <select name={"genres"} id={"genres-select"} onChange={genres}>
                    <option value={"Action"}>Action</option>
                    <option value={"Strategy"}>Strategy</option>
                    <option value={"Simulation"}>Simulation</option>
                </select>
                <input type={"submit"} onClick={Submit} />
            </form>
        </>
    );
}
