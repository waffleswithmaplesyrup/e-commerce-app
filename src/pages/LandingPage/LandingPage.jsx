import Navbar from "../../components/Navbar";
import LoginForm from "../../components/LoginForm";
import Footer from "../../components/Footer";

export default function LandingPage() {
  

  return <div className="landing-page">

    <Navbar page="Log In" />

    <LoginForm />

    <Footer />

  </div>
}