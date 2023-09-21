import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/products");
  };

  return <>
  <form className="login" onSubmit={handleSubmit}>
      Log In
      <div className="login-info">
        <input className="email" type="text" placeholder="Phone number / Username / Email" autoComplete="on" name="loginKey" maxLength="128" aria-invalid="false" />
      </div>
      <div className="login-info">
        <input className="password" type="password" placeholder="Password" autoComplete="current-password" name="password" maxLength="16" aria-invalid="false" />
        <button className="password-eye"><img src="../../../public/images/hide.png" alt="hidden" /></button>
      </div>
      <button className="login-button">log in</button>
      <div className="forgot-password">
        <a href="#">Forgot Password</a>
        <a href="#">Log In with Phone Number</a>
      </div>
      <div className="login-line">
        <div></div><span>or</span><div></div>
      </div>
      <div className="alt-login">
        <button>Facebook</button>
        <div></div>
        <button>Google</button>
      </div>
      <div className="sign-up">New to Lazapee? <a href="#">Sign Up</a></div>
    </form>
  </>
}