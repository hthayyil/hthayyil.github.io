import React from "react"
import styled from 'styled-components'
import ProOneImage from './ProjectsImages/Ugraduate.png'
import ProTwoImage from './ProjectsImages/Project_2.png'
import ProThreeImage from './ProjectsImages/Project_3.jpg'
import Github from './Github'
import Instagram from './Instagram'
import './styles.css';
import Feed from "react-instagram-authless-feed"
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
const SubHeader = styled.h1`
  min-width: ${props => props.minWidth};
  min-height: 80px;
  display: inline-block;
  position: relative;
  font-family: Arial;
  padding-left: 5%;
  text-align: ${props => props.alignment};
  font-size: 33px;
  padding: auto;
  filter: brightness(120%);
  font-weight: 900;
  width:100%;
  border: 0px;
  background: -webkit-linear-gradient(90deg, ${props => props.fromColor} , ${props => props.toColor} );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

Header.defaultProps = {
  fromColor: '#0fffc1',
  toColor: '#7e0fff'
}


const GlowBar = styled.div`
  display: inline-block;
  position: relative;
  height: 10px;
  width: 65%;
  margin: auto;
  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.3);

  &:after{
    border-radius: 20px;
    margin: auto;
    position: absolute;
    content: '';
    top: 0;
    left: 9%;
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
  font-family: Arial;
  font-weight: 600;
  z-index: 1;
  position: relative;
  box-sizing: border-box;
  color: #fff;
  display: inline-block;
  font-size: 15px;
`
const HyperLink = styled.a`
  font-family: Arial;
  font-weight: 600;
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
  font-size: 15px;
  margin-left: 5px;

  &::after{
    content: "";
    display:block;
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

const ProjectDisplay = styled.div`
  display: table;
  table-layout: fixed;
  margin: 42px;
  marginBottom: 60px;
  width: 80%;
  max-width: 2000px;
`
const ProjectElement = styled.div`
  display: table-cell;
  vertical-align: middle;

  margin: auto;
  width: 140px;
`


const ProjectImage = styled.div`
  display: block;
  width: 55ch;
  height: 27ch;
  margin-right: 2ch;
  background: transparent;
  border-radius: ${props => props.radius};
  filter: drop-shadow(2px 2px 5px rgba(192,192,192, 0.5));
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.icon});
  transition: box-shadow 1s;
  will-change: transform;
  cursor: pointer;

  @media only screen and (max-width: 40em) {
    width: 4.5ch;
    height: 4.5ch;
    margin: 0.8ch;
    border-radius: 2ch;
   }

  &:hover {
    filter: drop-shadow(2px 2px 12px rgba(192,192,192, 0.5));
  }
`
const ProjectInfo = styled.div`
  display: block;
  background: ${props => props.backgroundColor};

  border-radius: 6px;

  color: white;


  line-height: 1.3;
  font-family: Arial;
  font-weight: 100;
  z-index: 1;
  position: relative;
  padding: 17px;

  display: inline-block;
  font-size: 17px;
  margin: 0px;

  line-height: 1.6;
  text-align: left;
`

function Projects(props) {
  return (

    <div id="Projects" style={{marginTop: '99px', justifyContent: 'center', alignItems: 'center'}}> {/* didint do shit*/}
      <div style={{display:'flex',flexFlow: 'row wrap', justifyContent:'space-around', width:'100%'}}>
        <Header minWidth='300px'>MY PROJECTS</Header>
        <GlowBar/>



      </div>


      <ProjectDisplay>

        <ProjectElement>
          <SubHeader minWidth='100px' fromColor="#ffffff" toColor="#e75480" alignment="center">UGraduate</SubHeader>
          <ProjectInfo backgroundColor="rgba(231, 84, 128, 0.5)" alignment="left" >
          UGraduate is a mock student registration application. It is used to manipulate a database consisting of student information, allowing individual students to sign in, add or drop courses and see courses needed to graduate.
          This application was built using Java, Spring framework (Spring Boot, Spring Security), Hibernate, MySQL and React.
          <Github themeColor={"rgba(0, 13, 255,)"} link={"https://github.com/hthayyil/UGraduate"}/>
          </ProjectInfo>
        </ProjectElement>
      </ProjectDisplay>


      <ProjectDisplay>
        <ProjectElement>
            <SubHeader minWidth='300px' fromColor="#ffffff" toColor="#4dd2ff" alignment="center">Audio Sample Sequencer</SubHeader>
            <ProjectInfo backgroundColor="rgba(	77, 21, 100, 0.5)">
            This electronic drum machine is a standalone synthesizer which allows the user to edit and sequence a collection of interal synthesized sounds.
            It also supports recording samples into the machine and manipulating recorded sounds, and can be used as an external FX processor as well.
            It features MIDI clock synchronization over USB.
            I used multiplexing to control a row of 16 buttons, 32 LED's, and 8 potentiometers. The potentiometers control parameters for audio manipulation including level, decay, pitch shift/ envelope, bit crush, delay time, delay feedback and cutoff.
            This device is Teensy powered, and uses the Teensy Audio Library. I'm still in the design phase of this project but you can watch videos of it in action on my Instagram linked below!
            <Instagram themeColor={"rgba(0, 13, 255,)"} link={"https://www.instagram.com/p/CEXfuM6BNhy/"}/>
            </ProjectInfo>
          </ProjectElement>
      </ProjectDisplay>

      <ProjectDisplay>
        <ProjectElement>
            <SubHeader minWidth='300px' fromColor="#ffffff" toColor="#4dd2ff" alignment="center">Pocket Sequencer</SubHeader>
            <ProjectInfo backgroundColor="rgba(	77, 21, 100, 0.5)">
             The pocket sequencer is an open source electronic MIDI controller device and step sequencer.
             It features three modes;
             • standalone MIDI trigger mode
             •  mono sequencer mode which allows for 32 step sequences, one note each
             •  poly sequencer mode which allows for 8 step sequences, up to 4 notes each
             Using the three pots, you can control parameters such as which key you are in, and the BPM. The key as well as BPM is displayed on an LCD.
             It can be booted up into various music applications using a MIDI DIN socket, and can also communicate with any MIDI understanding device. An Arduino generates all MIDI data and drives the 16 LED's, 3 pots, 3 buttons, LCD, and button matrix.
              I created this device during the Spring 2020 lockdown, because I didn't have access to a MIDI controller where I was quarantining. I realized there is a absense of truly portable and travel sized MIDI controllers on the market! You can watch videos
              of the Pocket Sequencer in action on my Instagram linked below. Build documentation and code can be found on my Github, also linked below!
            <Instagram themeColor={"rgba(0, 13, 255,)"} link={"https://www.instagram.com/p/CCKGjaqBZkb/"}/>   <Github themeColor={"rgba(0, 13, 255,)"} link={"https://github.com/hthayyil/ArpCube"}/>
            </ProjectInfo>
          </ProjectElement>
      </ProjectDisplay>

      <ProjectDisplay>
        <ProjectElement>
            <SubHeader minWidth='300px' fromColor="#ffffff" toColor="#4dd2ff" alignment="center">Rock Paper Scissors Lizard</SubHeader>
            <ProjectInfo backgroundColor="rgba(	77, 21, 100, 0.5)">
            This is a game server I created for my Software Engineering course which uses networking and multi-threading to allow multiple players to play a game of Rock Paper Scissors Lizard. Clients can see other online clients, and challenge them to play.
            It was built using Java and JavaFX.
            <Github themeColor={"rgba(0, 13, 255,)"} link={"https://github.com/hthayyil/RockPaperScissors"}/>
            </ProjectInfo>
          </ProjectElement>
      </ProjectDisplay>

      <ProjectDisplay>
        <ProjectElement>
            <SubHeader minWidth='300px' fromColor="#ffffff" toColor="#4dd2ff" alignment="center">Sister Engineering</SubHeader>
            <ProjectInfo backgroundColor="rgba(	77, 21, 100, 0.5)">
             Sister Engineering is my life project which is very much in its infancy.
              I'm a female musician and engineer, and frequently find myself in male dominated spaces that while may be inclusive, are unfortunately not very diverse.
              The idea behind Sister Engineering is to allow diversity and inclusion of woman in STEM and electronic music, while focusing on the intersection of art, technology and creative engineering.
              I have many ideas and goals for this project, which is very much in its infancy, but currently, it exists as an Instagram page where I share some of the audio engineering projects I'm working on.
            <Instagram themeColor={"rgba(0, 13, 255,)"} link={"https://www.instagram.com/sisterengineering/"}/>

            </ProjectInfo>
          </ProjectElement>
      </ProjectDisplay>
      <Feed
  userName="sisterengineering"
  className="image-wrapper"
  classNameLoading="Loading"
    limit="6"
      />




{/*
      <ProjectDisplay>
        <ProjectElement>
          <a href="https://github.com/Jalomo1197/Design-Pattern-Code-Generator" target='_blank' rel='nofollow noopener noreferrer'>
            <ProjectImage radius='6px' icon={ProThreeImage}/>
          </a>
        </ProjectElement>
        <ProjectElement>
          <SubHeader minWidth='300px' fromColor="#ffffff" toColor="#9370db" alignment="right">Design Pattern Generator</SubHeader>
          <ProjectInfo backgroundColor="rgba(147, 112, 219, 0.5)">
          IntelliJ plugin program that generates the implementation code of supported design patterns, which is
          inserted into the user’s project.
          </ProjectInfo>
        </ProjectElement>
      </ProjectDisplay>
*/}
    </div>
  )
}

export default Projects;
