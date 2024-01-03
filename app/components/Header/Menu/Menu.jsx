import React from "react";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="mega-menu h-100">
          <nav className="navbar navbar-expand-lg navbar-light justify-content-lg-center justify-content-between h-100">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown dropdown-mega position-static megaMenuContainer">
                  <a
                    href="/discover-our-products"
                    target="_self"
                    className="nav-link active"
                  >
                    SHOP
                  </a>
                  <div className="dropdown-menu">
                    <div className="mega-content">
                      <div className="container px-0">
                        <div className="d-flex">
                          {/* ... (existing content in the mega-menu) */}
                          <p>wfmiimnf</p>
                          <p>wfmiimnf</p>
                          <p>wfmiimnf</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <div className="MegamenuBackLayer"></div>
                <li className="nav-item">
                  <a
                    href="http://localhost:3000/pages/skills"
                    target="_self"
                    className="nav-link"
                  >
                    SKILLS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://beta.mettamuse.com/stories"
                    target="_self"
                    className="nav-link"
                  >
                    STORIES
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://beta.mettamuse.com/aboutus"
                    target="_self"
                    className="nav-link"
                  >
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://beta.mettamuse.com/contactus"
                    target="_self"
                    className="nav-link"
                  >
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
