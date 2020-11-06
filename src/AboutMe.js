import React from 'react'
import styled from 'styled-components'
import './styles.css'
import Tabs from './Tabs'

import Java from './Icons/Java.png'
import Scala from './Icons/Scala.png'
import Cpp from './Icons/Cpp.png'
import C from './Icons/C.png'
import JS from './Icons/JS.png'
import SQL from './Icons/SQL.png'
import MySQL from './Icons/MySQL.png'
import GraphQL from './Icons/GraphQL.png'
import Git from './Icons/Git.png'
import Node from './Icons/Node.png'
import ReactImg from './Icons/React.png'
import Spring from './Icons/Spring.png'
import Csharp from './Icons/csharp.png'
import Fsharp from './Icons/fsharp.png'
import Arduino from './Icons/arduino.png'
import Raspberry from './Icons/raspberry.png'
import Pcb from './Icons/PCB.png'
import Maven from './Icons/maven.png'
import WebGl from './Icons/webgl.png'
import Python from './Icons/python.png'

//padding: 0.25em 1em;
const Header = styled.h1`
  min-width: ${props => props.minWidth};
  min-height: 80px;
  display: inline-block;
  position: relative;
  font-family: Arial;
  padding-left: 5%;
  text-align: left;
  font-size: 45px;
  padding: auto;
  filter: brightness(120%);
  font-weight: 900;
  border: 0px;
  background: -webkit-linear-gradient(90deg, ${props => props.fromColor} , ${props => props.toColor} );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`

Header.defaultProps = {
  fromColor: "pink",
  toColor: "blue"
}


const GlowBar = styled.div`
  display: inline-block;
  position: relative;
  height: 10px;
  width: 66%;
  min-width: 600px;
  margin: auto;
  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.3);

  &:after{
    border-radius: 20px;
    margin: auto;
    position: absolute;
    content: '';
    top: 0;
    left: 6%;
    right: 0;
    z-index: 0;
    height: 33%;
    width: 85%;
    margin: 0;
    filter: blur(0px);
	transform: scale(1.3);
    background: linear-gradient(90deg, ${props => props.fromColor} , ${props => props.toColor});
    /*background: linear-gradient(90deg, #0fffc1, #7e0fff);*/
    background-size: 200% 200%;
    animation: animateGlow 10s ease infinite;

    @keyframes animateGlow {
      0%  {
				background-position: 0% 50%
			}

			50% {
				background-position: 100% 50%
			}

      100% {
				background-position: 0% 50%
			}
    }
  }
`

GlowBar.defaultProps = {
  fromColor: '#0fffc1',
  toColor: '#7e0fff'
}

const Text = styled.p`
  line-height: 1.3;
  font-family: Arial;
  font-weight: 100;
  z-index: 1;
  position: relative;
  box-sizing: inherit;
  color: #fff;
  display: inline-block;
  font-size: 20px;
  margin: 0px;
  margin-top: 33px;
  line-height: 1.6;
  text-align: left;
`
const HyperLink = styled.a`
  display: inline-block;
  text-decoration-skip-ink: auto;
  position: relative;
  cursor: pointer;
  color: rgb(241, 117, 255);
  text-decoration-line: none;
  text-decoration-style: initial;
  text-decoration-color: initial;
  transition-property: all;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0s;
  margin-right: 5px;
  &::after{
    content: "";
    display: block;
    width: 0px;
    height: 1px;
    position: relative;
    bottom: 0.37em;
    background-color: rgb(241, 117, 255);
    opacity: 0.5;
    transition-property: all;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0s;

  }
`

const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(2,minmax(140px,200px));
    overflow: hidden;
    padding: 0;
    margin: 20px 0 0;
    color: white;
`

const Li = styled.li`
    position: relative;
    margin-bottom: 10px;
    padding-left: 45px;
    font-family: "SF Mono","Fira Code","Fira Mono","Roboto Mono","Lucida Console",Monaco,monospace;
    font-size: 18px;
    color: white;
    z-index: 1;
    list-style:none;


    &::before{
        z-index: 1;
        content: '';
        background-image: url(${props => props.icon});
        background-size: 30px 30px;
        width: 30px;
        height: 30px;
        position: absolute;
        left: 0px;
        color: rgb(100, 255, 218);
        font-size: 14px;
        line-height: 12px;

    }
`



const AboutSection = styled.div`
  marginTop: 150;
  marginBottom: 100;
  textAlign: center;
`

const AboutText = styled.div`
  width: 35%;
  position: relative;
  textAlign: left;


  @media only screen and (max-width: 40em) {
    width: 100vw;
    textAlign: left;
  }
`

const AboutLayout = styled.div`
  width: 90%;
  textAlign: left;
  paddingLeft: 9%;
  paddingRight: 9%;
  display: flex;
  flexFlow: row wrap;
  justify-content: space-around;


  @media only screen and (max-width: 40em) {
    width: 100%;
    paddingLeft: 0%;
    paddingRight: 0%;
    textAlign: left;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
`

const TabsLayout = styled.div`
  width: 35%;
  position: relative;
  text-align: left;
  @media only screen and (max-width: 40em) {
    marginTop: 21px;
    width: 100vw;
    position: relative;
    display: block;
  }
`

//, Helvetica, sans-serif old tabs font

function AboutMe(props) {
    return (
        <AboutSection id="About">
            <div style={{display:'flex',flexFlow: 'row wrap',justifyContent:'space-around', width:'100%', height:'fit-content'}}>
                <Header fromColor="blue" toColor="purple" minWidth='300px'>ABOUT ME</Header>
                <GlowBar fromColor="blue" toColor="purple"/>
            </div>

            <AboutLayout>
                <AboutText>
                  <Text>
                    I'm and independent engineer and designer based out of Chicago, IL. I am currently a software engineering student at the
                    <HyperLink href='https://cs.uic.edu/' target='_blank' rel='nofollow noopener noreferrer' style={{marginLeft: '5px'}}>
                    University of
                    </HyperLink>
                    <HyperLink href='https://cs.uic.edu/' target='_blank' rel='nofollow noopener noreferrer'>
                    Illinios at
                    </HyperLink>
                    <HyperLink href='https://cs.uic.edu/' target='_blank' rel='nofollow noopener noreferrer'>
                    Chicago.
                    </HyperLink>
                    I will be graduating in Decemeber 2020 with my BS in Computer Science.
                    I am interested in engineering at the intersection of audio and creative coding.
                    You can contact me at hannathayyil96@gmail.com.
                  </Text>
                </AboutText>

                <TabsLayout>
                    <Tabs>
                        <div label="Programming">

                            <Ul>
                                <Li icon={Java}> Java </Li>
                                <Li icon={Python}> Python</Li>
                                <Li icon={Csharp}> C# </Li>
                                <Li icon={Fsharp}> F# </Li>
                                <Li icon={C}> C/C++ </Li>
                                <Li icon={JS}> JavaScript </Li>
                                <Li icon={SQL}> SQL/MySQL </Li>
                                <Li icon={Spring}> Spring</Li>
                                <Li icon={Maven}> Maven </Li>
                                <Li icon={WebGl}> WebGL </Li>
                                <Li icon={Git}> Git </Li>
                                <Li icon={Node}> NodeJS </Li>
                                <Li icon={ReactImg}> ReactJS </Li>
                            </Ul>

                        </div>
                        <div label="Electronics">
                            <Ul>
                                <Li icon={Arduino}> Arduino </Li>
                                <Li icon={Raspberry}> Raspberry Pi</Li>
                                <Li > • PCB Design and Fabrication</Li>
                            </Ul>
                        </div>
                        <div label="Fabrication">
                            <Text style={{height: '260px', width:'100%'}}>
                            • 3d Printing
                            <br></br>
                            • Laser Cutting
                            <br></br>
                            • CNC Mill
                            <br></br>
                            • Lathe
                            </Text>
                        </div>
                        <div label="2D/3D Design">
                            <Text style={{height: '260px', width:'100%'}}>
                            • SolidWorks
                            <br></br>
                            • Onshape
                            <br></br>
                            • Processing
                            <br></br>
                            • Adobe Photoshop
                            <br></br>
                            • Adobe Illustrator
                            </Text>
                        </div>
                        <div label="Other Skills">
                            <Text style={{height: '260px', width:'100%'}}>
                            • Google Adwords
                            <br></br>
                            • SEO
                            <br></br>
                            • Sprout Social
                            <br></br>
                            •  Wordpress

                            </Text>
                        </div>

                        <div label="Interests">
                            <Text style={{height: '260px', width:'100%'}}>
                            • Digital Signal Processing
                            <br></br>
                            • Audio Electronics
                            <br></br>
                            • Green Energy
                            <br></br>
                            • Web Design
                            <br></br>
                            • Oil Painting
                            <br></br>
                            • Film Photography
                            </Text>
                        </div>


                    </Tabs>
                </TabsLayout>
            </AboutLayout>
      </AboutSection>
    )
  }

  export default AboutMe;
