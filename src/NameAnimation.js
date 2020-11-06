import React, { useState } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'
import Typist from 'react-typist';
import styled from 'styled-components'
//import TvMan from './TvMan.gif'
import './type.scss'
import './styles.css'

const items = ['Hanna','Thayyil']
const config = { mass: 20, tension: 2000, friction: 200 }

const Cursor = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 1000
}

const Span = styled.span`
   color: white;
   font-size: 2.4em;
   letter-spacing: 0.1em;
   line-height:1.7em;
   @media only screen and (max-width: 40em) {
    line-height:5.0em;
    font-size: 1em;
    text-align: center;
   }
`

function NameAnimation(props) {
  const [toggle, set] = useState(true)
  const theme = props.themeColor
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })


  return (
    <div className="trails-main">
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`)}}>

            <animated.div>{items[index]}</animated.div>

          </animated.div>
        ))}

        {/* TODO: try giving a className from css file to Typist to prevent cursor height */}
        <Typist avgTypingDelay={40} startDelay={3000} cursor={Cursor} style={{marginTop: '0px'}}>

            <Span>Innovator</Span>
            <Typist.Backspace count={9} delay={1000} />
            <Span>Designer</Span>
            <Typist.Backspace count={8} delay={1000} />
            <Span>Software Engineer</Span>
        </Typist>
      </div>
    </div>
  )
}

export default NameAnimation;
