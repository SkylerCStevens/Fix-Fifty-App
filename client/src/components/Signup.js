import React from "react";
import "./Signup.css";




function Signup() {




    return (
        <div>

            <form>

                <label for="Username"></label>

                <input

                    name="Username"
                    type="text"
                    placeholder="Username"
                />


                <label for="Email"></label>

                <input

                    name="Email Address"
                    type="text"
                    placeholder="Email Address"
                />

                <label for="Password"></label>

                <input

                    name="Password"
                    type="password"
                    placeholder="Password"
                />

                <label for="Confirmpassword"></label>

                <input

                    name="Confirmpassword"
                    type="password"
                    placeholder="Confirm Password"
                />
                <button type="submit">Sign Up</button>
            </form>

        </div>
    )

}




export default Signup;