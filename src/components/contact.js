import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Link, media, mixins } from '@styles';

const CustomSection = styled.section`
  padding-top: 10vh;
  padding-bottom: 20vh;
  overflow: hidden;
`;
const MarqueeWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  ${props => props.secondLine && `justify-content: flex-end;`};
`;
const CustomTitle = styled(motion.h1)`
  font-size: 11.4vw;
  word-wrap: nowrap;
  margin: 0 2vw;
  line-height: 95%;
  font-weight: 400;
  text-transform: uppercase;
  font-family: var(--font-family-serif);
  ${media.tablet`font-size: 12.7vw;`};
`;
const EmailWrapper = styled.div`
  padding-top: 10vh;
  ${mixins.flexCenter};
  flex-direction: column;
  ${media.tablet`
    margin: 0;
  `};
`;
const Email = styled.a`
  font-size: 4vw;
  font-family: var(--font-family);
  text-transform: uppercase;
  text-decoration: underline;
  color: var(--text);
  :hover {
    text-decoration: none;
  }
  ${media.tablet`font-size: 7.2vw;`};
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 21vw;
  margin-top: 1rem;

  ${media.tablet`padding: 0;`};
`;
const LinkCol = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    :not(:first-child) {
      margin: 1rem 0;
    }
    font-size: 1.2vw;
    ${media.tablet`font-size: 20px;`};
  }
`;
const TextCol = styled.div`
  max-width: 40%;
  ${media.thone`max-width: 60%;`};
`;
const ContactText = styled.p`
  ${mixins.smallText};
  width: 90%;
  margin-left: auto;
  font-size: 0.95vw;
  margin-bottom: 2rem;
  ${media.tablet`font-size: 14px;`};
`;

const Contact = () => {
  return (
    <CustomSection>
      <MarqueeWrapper
        initial={{ x: '0' }}
        animate={{ x: '-85%' }}
        transition={{ duration: 12, ease: 'linear', repeat: Infinity, delay: 1 }}>
        <CustomTitle>Get in touch</CustomTitle>
        <CustomTitle>Get in touch</CustomTitle>
        <CustomTitle>Get in touch</CustomTitle>
        <CustomTitle>Get in touch</CustomTitle>
      </MarqueeWrapper>
      <MarqueeWrapper
        initial={{ x: '0' }}
        animate={{ x: '85%' }}
        transition={{ duration: 12, ease: 'linear', repeat: Infinity, delay: 1 }}
        secondLine>
        <CustomTitle>Get in touch</CustomTitle>
        <CustomTitle>Get in touch</CustomTitle>
        <CustomTitle>Get in touch</CustomTitle>
        <CustomTitle>Get in touch</CustomTitle>
      </MarqueeWrapper>
      <Container>
        <EmailWrapper>
          <Email
            href="mailto:hello@kyryloorlov.com?subject=Let%27s%20make%20something%20cool"
            target="_blank"
            rel="noopener noreferrer">
            hello@kyryloorlov.com
          </Email>
          <Row>
            <LinkCol>
              <li>
                <Link href="https://instagram.com/kothedesigner">Instagram</Link>
              </li>
              <li>
                <Link href="https://twitter.com/kyryloren">Twitter</Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/kyryloren">Linkedin</Link>
              </li>
              <li>
                <Link href="https://dribbble.com/kyryloren">Dribbble</Link>
              </li>
              <li>
                <Link href="https://github.com/kyryloren">GitHub</Link>
              </li>
            </LinkCol>
            <TextCol>
              <ContactText>
                Created for, designed by, and developed by Kyrylo Orlov in 2021. Wow, you scrolled
                pretty far... you might as well just click that email up there.
              </ContactText>
            </TextCol>
          </Row>
        </EmailWrapper>
      </Container>
    </CustomSection>
  );
};

export default Contact;
