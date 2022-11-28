import React, {useState} from "react";

export default function Search({returnResult}) {
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
        // console.log(gameResults);
        returnResult(gameResults);
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
        </div>
    );
}
