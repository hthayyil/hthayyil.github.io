import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import resume from './THAYYIL-RESUME.pdf'
import initals from './Icons/AJ.png'
import './styles.css'
import {useSpring, animated} from  'react-spring'
import { Link, animateScroll as scroll } from "react-scroll"

//(312) 996-3126 call
// orgin back linear-gradient(to top left, rgb(0, 0, 21), rgb(11, 11, 41));
const NavBar = styled.div`
    padding:10px;
    padding-top:24px;
    background: linear-gradient(to bottom, rgb(0, 0, 0), rgba(11, 11, 41,.0));
    position: fixed;
    transition: top 0.5s;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
`

const Buttons = styled.div`
    text-align: right;
    display: inline-block;
    width: 90%;
    height: 100%;
    float: right;
`



const Initals = styled.div`
    text-align: left;
    float: left;
    display: inline-block;
    width: 10%;
`
Initals.defaultProps = {
    windowW: window.innerWidth/2
}

Buttons.defaultProps = {
    windowW: window.innerWidth/2
}

const Button = styled.button`

    border-radius: 3px;
    margin: 0 1em;
    font-size: 18px;
    padding: 0.25em 1em;
    cursor: pointer;
    filter: brightness(120%);
    transition: 0.5s all ease-out;
    transition-property: all;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    transition-delay: 0s;
    font-weight: 900;


    /* Color the border and text with theme.main */
    /* color: ${props => props.theme.main+ "1)"};
        border: 2px solid ${props => props.theme.main+ "1)"};
        color: linear-gradient(to bottom right, rgb(8, 123, 255), rgb(241, 117, 255));
        background: transparent;
        border: 2px solid linear-gradient(to bottom right, rgb(8, 123, 255), rgb(241, 117, 255));
    */

    border: 0px;
    background: -webkit-linear-gradient(rgb(8, 123, 255), rgb(241, 117, 255));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;


    /* On hover */
    &:hover {
        background: transparent;
        /*
        background-color: ${props => props.theme.main+ "1)"};
        border: 3px solid ${props => props.theme.main+ "1)"};
        */
       -webkit-text-fill-color: white;
        color: white;
    }

    &:focus {
        outline:0;
    }
`

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
    theme: {
        main: "white"
    }
}
/*
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
*/
function NavigationBar(props){
    const Fade = useSpring({ friction: 100, tension: 5, delay: 1800, opacity: 1, from: {opacity: 0}});

    return (
        <animated.div style={Fade}>

                <NavBar id='navbar'>
                    <div style={{display: 'flex', flexFlow:'row nowrap', alignItems: 'center', justifyContent: 'space-between'}}>
                  {/* <Initals>
                        <img src={initals} alt="initals" width="70" height="70"/>
                    </Initals>
                    */}
                    <Buttons>
                        <Link activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={500}>
                            <Button> About </Button>
                        </Link>
                        <Link activeClass="active" to="Projects" spy={true} smooth={true} offset={-70} duration={500}>
                            <Button> Projects </Button>
                        </Link>
                        <a href={resume} target='_blank' rel='nofollow noopener noreferrer' >
                        <Button> Resume </Button>
                        </a>
                        <a className="nav-item" href="mailto:hannathayyil96@gmail.com?subject=Top Secret Sauce&body=Cool website!" rel="nofollow noopener noreferrer">
                        <Button> Contact </Button>
                        </a>
                    </Buttons>
                    </div>
                </NavBar>

        </animated.div>
    )

}

export default NavigationBar;
