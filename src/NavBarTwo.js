import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {useSpring, animated} from  'react-spring'
import { Link, animateScroll as scroll } from "react-scroll"
import initals from './Icons/AJ.png';
import resume from './THAYYIL-RESUME.pdf';

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
}

function Nav() {
  const Fade = useSpring({ friction: 100, tension: 5, delay: 1800, opacity: 1, from: {opacity: 0}});
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = event => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <animated.div style={Fade}>
        <Styles.Wrapper>
            <CSSReset />

            <Navbar.Wrapper id="navbar">
                <Navbar.Logo icon={initals}></Navbar.Logo>

                <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
                <HamburgerButton.Lines />
                </HamburgerButton.Wrapper>

                <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
                <Link activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={500}>
                    <Navbar.Item color='purple'>About</Navbar.Item>
                </Link>
                <Link activeClass="active" to="Projects" spy={true} smooth={true} offset={-70} duration={500}>
                    <Navbar.Item color='blue'>Projects</Navbar.Item>
                </Link>
                <a style={{textDecoration: 'none'}} href={resume} target='_blank' rel='nofollow noopener noreferrer'>
                    <Navbar.Item color='pink'>Resume</Navbar.Item>
                </a>
                <a style={{textDecoration: 'none'}} className="nav-item" href="mailto:hannathayyil96@gmail.com?subject=Top Secret Sauce&body=Cool website!" rel="nofollow noopener noreferrer">
                    <Navbar.Item color='red'>Contact</Navbar.Item>
                </a>
                </Navbar.Items>
            </Navbar.Wrapper>
        </Styles.Wrapper>
    </animated.div>
  );
}

const Styles = {
  Wrapper: styled.main`
    postion: fixed;
    display: flex;
    background-color: linear-gradient(to bottom, rgb(0, 0, 0), rgba(11, 11, 41,.0));
  `
};

const Navbar = {
  Wrapper: styled.nav`

    flex: 10;
    position: fixed;
    align-self: flex-start;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    padding: 1rem 3rem 0em 1em;
    z-index: 1031;
    transition: top 0.5s;

    display: flex;
    justify-content: space-between;
    align-items: center;



    // 40em == 640px
    @media only screen and (max-width: 40em) {
      position: fixed;
      width: 100vw;
      top: 0;
      padding: 1rem 3rem 1em 1em;
      background-color: black;
    }
  `,
  Logo: styled.h1`
    background-size: cover;
    background-image: url(${props => props.icon});
    height: 90px;
    width: 90px;
    padding: 0.5rem 1rem;
    @media only screen and (max-width: 40em) {
      height: 51px;
      width: 51px;
    }
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
    font-weight: 900;
    z-index: 1030;


    @media only screen and (max-width: 40em) {
      position: fixed;
      right: 0;
      top: 0;


      height: 100%;
      z-index: 1030;
      flex-direction: column;
      border-left-style: solid;
      border-width: 3px;
      border-color: purple;
      background-color: black;
      padding: 3rem 3rem 3rem 3rem;

      transition: 0.2s ease-out;

      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(100%)`};
    }
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;
    color: white;
    font-family: Arial;
    background-color: transparent;
    transition: 0.5s all ease-out;
    transition-property: all;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    transition-delay: 0s;
    &:hover {
      color: ${props => props.color};
      filter: brightness(120%);
    }

    padding: 0.25em 2em;
    @media only screen and (max-width: 40em) {
      padding: 3.5rem 0;
      background-color: black;
    }
  `
};

const HamburgerButton = {
  Wrapper: styled.button`
    height: 3rem;
    width: 3.5rem;
    position: relative;
    font-size: 12px;



    display: none;

    @media only screen and (max-width: 40em) {
      display: block;
    }

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;

    cursor: pointer;

    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
  Lines: styled.div`
    top: 50%;

    margin-top: -0.125em;


    &,
    &:after,
    &:before {
      /* Create lines */
      height: 3px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: white;
      position: absolute;
    }

    &:after {
      /* Move bottom line below center line */
      top: -0.8rem;

    }

    &:before {
      /* Move top line on top of center line */
      top: 0.8rem;
    }
  `
};

const CSSReset = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;
  }

  body {
    font-size: 1.4rem;
    font-family: Arial;
  }
`;

export default Nav;
