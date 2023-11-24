import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("mamadi78.94@gmail.com");
  const [password, setPassword] = useState("123456789");

  return (
    <div className="loginContainer">
      <h2>Login</h2>
      <form className="form">
        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formControl">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button className="bookmarkBtn btn--primary">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
