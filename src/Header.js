import React from "react";
import "./Header.css";
import { Spring } from "react-spring";

const Header = () => (
  <div>
    <header className="hero">
      <div className="hero_bg" />
      <div className="hero_fg" />
      <Spring
        from={{ opacity: 0, transform: "translate3d(0,-40px,0)" }}
        to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
      >
        {props => (
          <h1 style={props} className="title text-center">
            Treat <span>or</span> Coding!
            <span className="drop" />
            <span className="drop" />
            <span className="drop" />
            <span className="drop" />
            <span className="drop" />
          </h1>
        )}
      </Spring>
    </header>
    <svg className="visually-hidden">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="2" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feComposite in2="goo" in="SourceGraphic" result="mix" />
        </filter>

        <linearGradient
          id="myLinearGradient1"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor="#00cc00" stopOpacity="1" />
          <stop offset="100%" stopColor="#006600" stopOpacity="1" />
          <animate
            values="0% 25% 0%;"
            dur="2s"
            attributeName="y1"
            repeatCount="indefinite"
          />
          <animate
            values="100%; 50%; 100%"
            dur="4s"
            attributeName="y2"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default Header;
