import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const handleClick = () => {
  window.open("https://drive.google.com/file/d/1YUIzLkzDM1LdDteWqkFh685A966BD3rR/view?usp=sharing");
};

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            c.h.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Work</button>
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
            <button onClick={handleClick}>Resume</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
