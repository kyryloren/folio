import React from 'react';
import {
  AboutSection,
  Wrapper,
  Text,
  TextWrapper,
  SmallText,
  SmallTextWrapper,
  Row,
  Award,
} from './style';
import { Container } from '@styles';

const About = () => {
  return (
    <AboutSection>
      <Container>
        <Wrapper>
          <TextWrapper>
            <Text>
              Hey there! My name is kyrylo orlov and I am a 15 year old ui/ux designer, developer,
              and business strategist with a focus on creating creative digital design solutions.
            </Text>
            <Text>
              Over the past 5 years, I've worked on a diverse range of clients across multiple
              disciplines, ranging from brand creation to large scale e-commerce institutions.
            </Text>
          </TextWrapper>
        </Wrapper>
        <SmallTextWrapper>
          <SmallText indent>
            These experiences have helped me approach brands from a more strategic perspective while
            simultaneously communicating a powerful story that creates a memorable and lasting
            experience. I love everything to do with development and visual design as well as
            delivering extraordinarily creative solutions across digital platforms.
          </SmallText>
        </SmallTextWrapper>
        <Row>
          <SmallText>Awards and Recognition</SmallText>
          <div>
            <Award>
              <SmallText>Awwwards</SmallText>
              <SmallText>1x honors</SmallText>
            </Award>
            <SmallText mt style={{ textAlign: 'right' }}>
              More coming soon ;)
            </SmallText>
          </div>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;
