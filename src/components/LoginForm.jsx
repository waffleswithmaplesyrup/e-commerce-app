import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const [hidden, setHidden] = useState(true);

  const toggleHide = (event) => {
    event.preventDefault();

    setHidden(!hidden);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/products");
  };

  return <>
  <form className="login">
      Log In
      <div className="login-info">
        <input className="email" type="text" placeholder="Phone number / Username / Email" autoComplete="on" name="loginKey" maxLength="128" aria-invalid="false" />
      </div>
      <div className="login-info">
        <input className="password" type={hidden === true ? "password" : "text"} placeholder="Password" autoComplete="current-password" name="password" maxLength="16" aria-invalid="false" />
        <button onClick={toggleHide} className="password-eye"><img src={`../../public/${hidden === true ? "hide" : "view"}.png`} alt="hidden" /></button>
      </div>
      <button className="login-button" onClick={handleSubmit}>log in</button>
      <div className="forgot-password">
        <a href="#">Forgot Password</a>
        <a href="#">Log In with Phone Number</a>
      </div>
      <div className="login-line">
        <div></div><span>or</span><div></div>
      </div>
      <div className="alt-login">
        <button><img src="../../public/facebook.png" alt="facebook" />Facebook</button>
        <div></div>
        <button><img src="../../public/google.png" alt="google" />Google</button>
      </div>
      <div className="sign-up">New to Lazapee? <a href="#">Sign Up</a></div>
    </form>
  </>
}