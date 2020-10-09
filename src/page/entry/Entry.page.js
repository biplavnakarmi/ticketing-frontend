import React from "react";

import { Jumbotron } from "react-bootstrap";
import { Loginform } from "../../components/login/login.comp";
import "./entry.style.css";

export const Entry = () => {
    return (
        <div className="entry-page">
            <Jumbotron>


                <Loginform />

            </Jumbotron>
        </div>
    );

};