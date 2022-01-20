import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <link href="/">
      <a style={{ display:"flex", alignItems: "center", color: 'white'}}>
        <DiCssdeck size="3rem"/> <span>Portfolio</span>
      </a>
      </link>
    </Div1>
    <Div2>
      <li>
        <link href="#projects">
          <NavLink>Projects</NavLink>
        </link>
      </li>
      <li>
        <link href="#tech">
          <NavLink>Technologies</NavLink>
        </link>
      </li>
      <li>
        <link href="#about">
          <NavLink>About</NavLink>
        </link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
