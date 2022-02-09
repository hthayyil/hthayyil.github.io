import './index.scss';

import React, { useEffect, useRef, useState } from 'react';

import { CSSTransition } from 'react-transition-group';
import { LANGUAGE } from '../../constants/language';
import SubTitle from '../common/SubTitle';
import mmd from '../../assets/mmd';
import myData from '../../db.json';
import useLanguage from '../../hooks/useLanguage';

const AboutMe = () => {
  const {
    aboutMe: { profileImg, name, email, githubUrl, personalUrl, linkedInUrl },
  } = myData;
  const { currentLanguage } = useLanguage();

  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(email);
    setIsEmailCopied(true);
  };

  const nodeRef = useRef(null);
  useEffect(() => {
    if (isEmailCopied) {
      const timer = setTimeout(() => {
        setIsEmailCopied(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isEmailCopied]);

  const [aboutMySelfText, setAboutMySelfText] = useState('');

  const aboutMyselfRef = useRef(null);

  useEffect(() => {

    if (currentLanguage === LANGUAGE.EN) {
      import(`../../assets/static/markdown/aboutMySelf.english.md`)
        .then((res) => {
          fetch(res.default)
            .then((res) => res.text())
            .then((res) => setAboutMySelfText(res))
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);

          return '';
        });
      return;
    }
  }, [currentLanguage]);

  if (aboutMyselfRef.current) {
    aboutMyselfRef.current.innerHTML = mmd(aboutMySelfText);
  }

  return (
    <>
      {/* <SubTitle>About Me</SubTitle> */}
      <div className='about-me-container'>
        <div className='introduce'>
          <div className='about' ref={aboutMyselfRef}></div>
        </div>
        <div className='personal-infos'>
          {/* <div className='profile-image'>
            <img src={profileImg} alt={"hanna"} />
          </div> */}
          <div className='detail-wrapper'>
            <div className='details'>
             {/* <span className='name'>{name}</span> */}
              <div className='detail flex'>
                <span className='category'>Email</span>
                <div id='email' onClick={copy}>
                  {email}
                  <CSSTransition
                    nodeRef={nodeRef}
                    in={isEmailCopied}
                    timeout={300}
                    classNames='alert'
                    unmountOnExit
                    appear
                  >
                    <span ref={nodeRef} className='alert'>
                      copied!
                    </span>
                  </CSSTransition>
                </div>
              </div>
              {personalUrl && (
                <div className='detail flex'>
                  <span className='category'>Work</span>
                  <a href={personalUrl}>{personalUrl}</a>
                </div>
              )}
              <div className='detail flex'>
                <span className='category'>Github</span>
                <a href={githubUrl}>{githubUrl}</a>
              </div>

              {linkedInUrl && (
                <div className='detail flex'>
                  <span className='category'>LinkedIn</span>
                  <a href={linkedInUrl}>{linkedInUrl}</a>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default AboutMe;
