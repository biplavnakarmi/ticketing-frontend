import React from 'react';

import { Jumbotron } from 'react-bootstrap'; 
import { LoginForm } from '../../Components/login/login.comp';
import "./entry.style.css";

export const Entry = () => {
return(
    <div className="entry-page">
    <Jumbotron>
        <LoginForm />

    </Jumbotron>
    </div>
);

};