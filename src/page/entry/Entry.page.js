import React, { useState } from "react";

import { Jumbotron } from "react-bootstrap";
import { Loginform } from "../../components/login/login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";
import "./entry.style.css";

export const Entry = () => {

    // defined the variable [varialbe , function]

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [frmLoad, setFrmLoad] = useState('login');

    //creating a function -> capture the input value and keep in the state accordingly

    const handleOnchange = e => {
        const { name, value } = e.target

        switch (name) {
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break;

            default:
                break;
        }

        //to call api to submit the form

        console.log(name, value)
    };

    const handleOnSubmit = e => {
        e.preventDefault(); //stop the refresh of the page when clicking

        if (!email || !password) {
            alert("Fill up all the fields");
        }
    }

    const handleOnResetSubmit = e => {
        e.preventDefault(); //stop the refresh of the page when clicking

        if (!email) {
            alert("Fill up the email to reeset the password");
        }
    }
    const formSwitcher = frmType => {
        setFrmLoad(frmType)
    }

    return (
        <div className="entry-page">
            <Jumbotron className="form-box">
                {frmLoad === 'login' &&
                    <Loginform
                        handleOnchange={handleOnchange}
                        handleOnSubmit={handleOnSubmit} //pass as props
                        formSwitcher={formSwitcher}
                        email={email}  //giving the value back to keep it popolated
                        pass={password}
                    />}

                {frmLoad === 'reset' &&
                    <ResetPassword
                        handleOnchange={handleOnchange}
                        handleOnResetSubmit={handleOnResetSubmit} //pass as props
                        formSwitcher={formSwitcher}
                        email={email}  //giving the value back to keep it popolated
                        pass={password}
                    />}

            </Jumbotron>
        </div>
    );

};