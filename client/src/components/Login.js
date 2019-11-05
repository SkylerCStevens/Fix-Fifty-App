import React from "react";
import "./Login.css";

function Login() {




    return (
        <div>

            <form>

                <label for="Username">Username</label>

                <input

                    name="Username"
                    type="text"
                    placeholder="Enter username"
                />


                <label for="Password">Password</label>

                <input

                    name="Password"
                    type="password"
                    placeholder="Enter your password"
                />

                <button type="submit">Login</button>
            </form>

        </div>
    )

}




export default Login;