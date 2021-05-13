import React from 'react';
import { Container, Link } from '@styles';
import {
  AboutSection,
  Row,
  Col,
  ContentWrapper,
  ProjectCaption,
  Paragraphs,
  ApproachCol,
  AboutText,
  InformationText,
  BiggerText,
} from './style';
import { Line } from '../style';
import { Marquee } from '@components';

const About = ({ data }) => {
  return (
    <AboutSection>
      <Container>
        <Row>
          <Col>
            <ContentWrapper>
              <AboutText>{data.about}</AboutText>
              <ProjectCaption dangerouslySetInnerHTML={{ __html: data.services }} />
              {data.preview && <Link href={data.link}>View live site</Link>}
            </ContentWrapper>
          </Col>
          <Col rest>
            <Paragraphs margin>
              <div>
                <Marquee>Challenge</Marquee>
                <InformationText dangerouslySetInnerHTML={{ __html: data.challenge }} />
              </div>
              <ApproachCol>
                <Marquee>Approach</Marquee>
                <InformationText dangerouslySetInnerHTML={{ __html: data.approach }} />
              </ApproachCol>
            </Paragraphs>
          </Col>
        </Row>
        <Line />
        {data.showResult && (
          <Row>
            <Col>
              <AboutText big>The result</AboutText>
            </Col>
            <Col rest>
              <Paragraphs>
                <BiggerText dangerouslySetInnerHTML={{ __html: data.result }} />
              </Paragraphs>
            </Col>
          </Row>
        )}
      </Container>
    </AboutSection>
  );
};

export default About;
