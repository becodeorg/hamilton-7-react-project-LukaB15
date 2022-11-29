import React, {useState} from "react";

export default function Search({returnResult}) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        const slug = searchTerm.split(" ").join("-").toLowerCase();

        fetch(
            `https://api.rawg.io/api/games?key=3b9e3e45a7494082aabf45c1bf5f08fa&search=${slug}`,
        )
            .then(resp => resp.json())
            .then(({results}) => {
                if (results === void 0) {
                    alert("no Games found"); // eslint-disable-line no-alert
                } else {
                    returnResult(results);
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
        </div>
    );
}
