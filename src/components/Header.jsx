import React from 'react'

const Header = () => {
  return (
    <>
    {/*header*/}
    <header id="site-header" className="fixed-top">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark stroke">
              <h1>
                <a className="navbar-brand" to="">
                  <span className="fa fa-diamond" />FreeFoodHub <span className="logo">Shere a Meal, Spraed the Love</span></a>
              </h1>
              {/* if logo is image enable this   
              <a class="navbar-brand" to="#index.html">
                  <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
              </a> */}
              <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon fa icon-expand fa-bars" />
                <span className="navbar-toggler-icon fa icon-close fa-times" />
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mx-lg-auto">
                  <li className="nav-item @@home__active">
                    <a className="nav-link" to="/">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item @@about__active">
                    <a className="nav-link" to="about">Stories</a>
                  </li>
                  <li className="nav-item @@courses__active">
                    <a className="nav-link" to="courses">Free Food</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" to="contact">Donate</a>
                  </li>
                </ul>
                {/* /search-right*/}
                <div className="top-quote mr-lg-2 text-center">
                  <a to="#login" className="btn login mr-2"><span className="fa fa-user" /> login</a>
                </div>
              </div>
              {/* toggle switch for light and dark theme */}
              <div className="mobile-position">
                <nav className="navigation">
                  <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                      <input type="checkbox" id="checkbox" />
                      <div className="mode-container py-1">
                        <i className="gg-sun" />
                        <i className="gg-moon" />
                      </div>
                    </label>
                  </div>
                </nav>
              </div>
              {/* //toggle switch for light and dark theme */}
            </nav>
          </div>
    </header>
    </>
  )
}

export default Header
