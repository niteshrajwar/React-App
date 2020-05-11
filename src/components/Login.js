import React, { useState, useEffect } from 'react'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(null);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let req = {
            "email": email,
            "password": password
        }
        fetch('https://reqres.in/api/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers":
                    "Origin, X-Requested-With, Content-Type, Accept, Content-Type: 'application/json' "
                , "Access-Control-Allow-Methods":
                    "GET, POST, PUT"
            },
            body: JSON.stringify(req)
        })
            .then(res => res.json())
            .then(response => {
                if (response.status === 200) {
                    setToken(response.token);
                    localStorage.setItem("token", JSON.stringify(token))
                }

            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="form-container">
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="email" name="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Password</label>
                    <input className="form-control" type="password" name="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button className="btn btn-success" type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default Login
