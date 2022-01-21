import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hello! My name is Carlos Vasquez. I'm a Full-Stack Web Developer. I work for Video Streaming Company in Seattle as a Quality Assurance Analyst II. I'm also currently enrolled in the UW Coding Bootcamp.
        </SectionText>
        <Button onClick={() => window.location= 'https://drive.google.com/file/d/1gqr0zSEwN_hI9A0ofRDtv9J09CVESJFl/view?usp=sharing'}>Resume/CV</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;