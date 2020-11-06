
// Icon pngs
import github from './Icons/icons8-github-100.png'

import React from 'react';
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'

const IconsContainer = styled.div`
text-align: center;
text-center: center;
margin: 0px;
position: relative;
@media only screen and (max-width: 40em) {
    margin: 0px;
    text-align: center;
}
`

const Icon = styled.div`
  width: 6ch;
  height: 6ch;
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

// ^ scrap idea of glow? box-shadow: 0 12px 16px 0 rgba(192,192,192,0.3), 0 17px 50px 0 rgba(192,192,192,0.1);


//function to calculate appropiate Transformation location
const GeneralCal = (x, y, xDevisor) => [-(y - window.innerHeight / 1.5) / 20, (x - window.innerWidth / xDevisor) / 20, 1.2]
// Transformation on icons
const trans = (x, y, s) => `perspective(80px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
// Spring configuation of tranformation
const iconAnimationConfig = { mass: 5, tension: 350, friction: 40 }
// Normal state
const iconNormal = [0, 0, 1]



function Github(props){
    const Fade = useSpring({ friction: 100, tension: 5, delay: 1800, opacity: 1, from: {opacity: 0}});
    const Theme = props.themeColor;
    const Link = props.link;

    // Different Springs for each icon, in order to separate
    const [git_Spring, set1] = useSpring(() => ({ xys: iconNormal, config: iconAnimationConfig }))

    return (
    <animated.div style={Fade}>
        <IconsContainer>
            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set1({ xys: GeneralCal(x, y, 5.5) })}
                onMouseLeave={() => set1({ xys: iconNormal })}
                style={{ transform: git_Spring.xys.interpolate(trans), width:'fit-content', display:'inline-block' }}
                >
                <a href={Link} target='_blank' rel='nofollow noopener noreferrer' ><Icon theme={Theme} radius='100px' icon={github}/></a>
            </animated.div>
        </IconsContainer>
    </animated.div>
    )
}

export default Github
