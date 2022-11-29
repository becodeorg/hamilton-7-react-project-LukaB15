import React, {useState} from "react";
import styled from "styled-components";
import "./search.css";

const Inputtext = styled.input`
    border: none;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 80px;
    padding-right: 80px;
    background-color: rgba(255, 255, 255, 0.6);
    transition: 0.3s;
    ::placeholder {
        font-family: gaming;
        font-size: 18px;
        letter-spacing: 3px;
        color: white;
    }
    &:focus {
        background-color: white;
        transition: 0.3s;
    }
`;
const Submit = styled.input`
    border: none;
    padding-top: 21px;
    padding-bottom: 20px;
    padding-left: 50px;
    padding-right: 50px;
    font-family: gamingTitle2;
    color: #ff5400;
    transition: 0.3s;
    &:hover {
        color: white;
        background-color: #ff5400;
        transition: 0.3s;
    }
`;
const Form = styled.form`
    display: flex;
    align-items: center;
`;
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
            <Form>
                <Inputtext
                    type={"text"}
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder={"Search in All games"}
                />
                <br />
                <Submit type={"submit"} onClick={onSubmit} value={"SEARCH"} />
            </Form>
        </div>
    );
}
