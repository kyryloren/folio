import React from 'react';
import { StructuredText } from 'react-datocms';
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
} from './style';

const About = ({ data }) => {
  console.log(data);

  return (
    <AboutSection>
      <Container>
        <Row>
          <Col>
            <ContentWrapper>
              <AboutText>{data.about}</AboutText>
              <ProjectCaption dangerouslySetInnerHTML={{ __html: data.services }} />
              {data.preview && <Link href={data.link}>View live</Link>}
            </ContentWrapper>
          </Col>
          <Col rest></Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;
