import React from "react";
import styled from "styled-components";
import "./cut.css";

const Container = styled.div`
    height: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
`;
const Text = styled.h3`
    font-size: 35px;
    color: white;
    font-family: gamingTitle2;
    text-align: center;
`;
const Text2 = styled.h3`
    font-size: 35px;
    color: white;
    font-family: gamingTitle2;
    text-align: center;
    border-left: 2px solid white;
    padding-left: 50px;
    padding-top: 30px;
    padding-bottom: 30px;
    border-right: 2px solid white;
    padding-right: 50px;
`;
const Text3 = styled.h3`
    font-size: 30px;
    color: white;
    font-family: gamingTitle2;
    text-align: center;
    width: 30%;
`;
export default function Cut() {
    return (
        <Container className={"bcktext"}>
            <Text> 100% Quality</Text>
            <Text2> Made in Belgium</Text2>
            <Text3> Best After Sales service</Text3>
        </Container>
    );
}
