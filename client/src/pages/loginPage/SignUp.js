import React, { useState } from "react";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

const SignUp = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleForm = () => {
        axios.post("/register", {
            firstName,
            lastName,
            email,
            password
        })

    }

    return (
        <div>

        </div>
    )

}

export default SignUp;