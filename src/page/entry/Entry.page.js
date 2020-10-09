import React from "react";

import { Jumbotron } from "react-bootstrap";
import { loginform } from "../../components/login/login.comp";
import "./entry.style.css";

export const Entry = () => {
    return (
        <div className="entry-page">
            <Jumbotron>

                test
                <loginform />

            </Jumbotron>
        </div>
    );

};