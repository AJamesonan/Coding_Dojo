import React, { useState } from 'react';


const Form = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [titleError, setTitleError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password, confirmPassword};
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };


    return (
        <div>
        <form onSubmit={createUser}>
        {
            hasBeenSubmitted ?
            <h3>Boom goes the thing</h3>:
            <h3>fill out the thing</h3>
        }
            <div>
                <label>Username: </label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
                {
                    username.length<3 && username.length>0 ? <p>user name must be more than 2 characters</p>: ''
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                {
                    email.length<5 && email.length>0 ? <p>email must be more than 4 characters</p>: ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
            {
                password === confirmPassword ? 
                '':
                <p style={{color: 'red'}}>***Passwords must match***</p>
            }
            {
                password.length < 8 && password.length>0 ? 
                <p style={{color: 'red'}}>Password must be 8 or more characters</p>:
                ''
            }
            </div>
            <input type="submit" value="Create User" />
        </form>

        <hr />
        <p>First Name: {username}</p>
        <p>Email Address: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
}; 

export default Form;
