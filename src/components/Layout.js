import React from "react";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";
import { Helmet } from "react-helmet";

import { rhythm, scale } from "../utils/typography";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

class Layout extends React.Component {
  state = {
    theme: "null",
  };
  componentDidMount() {
    const script = `
    (function() {
      window.__onThemeChange = function() {};
      function setTheme(newTheme) {
        window.__theme = newTheme;
        preferredTheme = newTheme;
        document.body.className = newTheme;
        window.__onThemeChange(newTheme);
      }
      var preferredTheme;
      try {
        preferredTheme = localStorage.getItem('theme');
      } catch (err) { }
      window.__setPreferredTheme = function(newTheme) {
        setTheme(newTheme);
        try {
          localStorage.setItem('theme', newTheme);
        } catch (err) {}
      }
      var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
      darkQuery.addListener(function(e) {
        window.__setPreferredTheme(e.matches ? 'dark' : 'light')
      });
      setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
    })();
  `;

    const s = document.createElement("script");
    s.type = "text/javascript";
    s.innerHTML = script;
    document.body.appendChild(s);

    this.setState({ theme: window.__theme });
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme });
    };
  }
  renderHeader() {
    const { location, title } = this.props;

    return (
      <h1
        style={{
          ...scale(0.75),
          marginBottom: 0,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: "none",
            textDecoration: "none",
            color: "var(--textTitle)",
          }}
          to={"/"}
        >
          {title}
        </Link>
      </h1>
    );
  }
  render() {
    const { children } = this.props;

    return (
      <div
        style={{
          color: "var(--textNormal)",
          background: "var(--bg)",
          transition: "color 0.2s ease-out, background 0.2s ease-out",
          minHeight: "100vh",
        }}
      >
        <Helmet
          meta={[
            {
              name: "theme-color",
              content: this.state.theme === "light" ? "#ffa8c5" : "#282c35",
            },
          ]}
        />
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: rhythm(24),
            padding: `2.625rem ${rhythm(3 / 4)}`,
          }}
        >
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "2.625rem",
            }}
          >
            {this.renderHeader()}
            {this.state.theme !== null ? (
              <Toggle
                icons={{
                  checked: (
                    <img
                      src={moon}
                      width="16"
                      height="16"
                      role="presentation"
                      style={{ pointerEvents: "none" }}
                    />
                  ),
                  unchecked: (
                    <img
                      src={sun}
                      width="16"
                      height="16"
                      role="presentation"
                      style={{ pointerEvents: "none" }}
                    />
                  ),
                }}
                checked={this.state.theme === "dark"}
                onChange={(e) => {
                  console.log(window);
                  window.__setPreferredTheme(
                    e.target.checked ? "dark" : "light"
                  );
                }}
              />
            ) : (
              <div style={{ height: "24px" }} />
            )}
          </header>
          {children}
        </div>
      </div>
    );
  }
}

export default Layout;
