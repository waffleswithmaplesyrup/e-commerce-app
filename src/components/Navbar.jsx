import NavigateToCart from "./NavigateToCart";

export default function Navbar({page}) {

  return <>
  <nav className="navbar">
      <div className="logo">
        <a href={ (page === "Log In") ? "/" : "/products"} >
          <img src="../../public/logo-1.png" />
          Lazapee
        </a>
        <span>{page}</span>
      </div>
      { (page !== "Log In") ? <NavigateToCart /> : <a href="#">Need help?</a> } 
    </nav>
  </>
}