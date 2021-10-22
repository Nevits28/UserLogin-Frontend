import { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(pwd);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
    };

    const handlePwdChange = (e) => {
        const value = e.target.value;
        setPwd(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="email" value={email} onChange={handleEmailChange}></input>
            <input type="password" placeholder="password" value={pwd} onChange={handlePwdChange}></input>
            <button>Log In</button>
        </form>
    );
}