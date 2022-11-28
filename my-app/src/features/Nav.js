import React from "react";
import {Link} from "react-router-dom";

export default function Nav() {
    const navStyle = {
        color: "black",
    };
    return (
        <nav>
            <ul className={"nav-links"}>
                <Link style={navStyle} to={"/Formfilter"}>
                    <li>Recherche avancée</li>
                </Link>
            </ul>
        </nav>
    );
}
