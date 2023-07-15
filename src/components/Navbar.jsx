const Navbar = () => {
 return (
    <nav
      className="navbar"
    >
      <div className="main">
        <div className="logo">
          <img src="/Images/Logo.svg" alt="Logo" />
        </div>

        <div className="links">
          <ul>
            <li>
              <a href="#">
                Features
              </a>
            </li>
            <li>
              <a href="#">
                Pricing
              </a>
            </li>
            <li>
              <a href="#">
                Automation
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="cta-btns">
        <button
          className="login"
        >
          Customer login
        </button>
        <button
          className="signup"
        >
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
