import React, {useState} from "react";
import Results from "./Results";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [gameResults, setGameResults] = useState([]);

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        const slug = searchTerm.split(" ").join("-").toLowerCase();

        setGameResults([]);
        fetch(
            `https://api.rawg.io/api/games?key=678cfdbc0bb64f1fa15d4409fc3d8131&search=${slug}`,
        )
            .then(resp => resp.json())
            .then(({results}) => {
                if (results === void 0) {
                    alert("no Games found"); // eslint-disable-line no-alert
                } else {
                    setGameResults(results);
                }
            });
        setSearchTerm("");
    };
    return (
        <div className={"game-search"}>
            <h1>Game search</h1>
            <form>
                <input
                    type={"text"}
                    value={searchTerm}
                    onChange={handleChange}
                />
                <br />
                <input type={"submit"} onClick={onSubmit} />
            </form>
            <Results gameResults={gameResults} />
        </div>
    );
}
