import React from "react";
import styled from "styled-components";
import Search from "./Search";
import {Link} from "react-router-dom";
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
            <Link className={"link"} to={{pathname: `/`}}>
                <TitleApp>Games Manager</TitleApp>
            </Link>
            <Search returnResult={returnResult} />
        </div>
    );
}
