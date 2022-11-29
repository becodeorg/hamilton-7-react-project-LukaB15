import React from "react";
import styled from "styled-components";
import Search from "./Search";
import "./Title.css";

const TitleApp = styled.h1`
    border-radius: 3px;
    color: white;
    font-family: space;
    font-size: 80px;
    padding-top: 50px;
    margin-bottom: 30px;
    letter-spacing: 5px;
    text-align: center;
`;
export default function Title({returnResult}) {
    return (
        <div className={"bck"}>
            <TitleApp>Games Manager</TitleApp>
            <Search returnResult={returnResult} />
        </div>
    );
}
