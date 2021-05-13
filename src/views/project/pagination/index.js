import React from 'react';
import { PaginationSection, Row, Col, BigText } from './style';
import { Container } from '@styles';

const Pagination = ({ data }) => {
  return (
    <PaginationSection>
      <Container>
        <Row>
          <Col to={`/${data.previous.slug}`} id="cursor_hide">
            <Row>
              <div>
                <BigText>Previous</BigText>
                <BigText>Project</BigText>
              </div>
            </Row>
          </Col>
          <Col next to={`/${data.next.slug}`} id="cursor_hide">
            <Row>
              <div>
                <BigText>Next</BigText>
                <BigText>Project</BigText>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </PaginationSection>
  );
};

export default Pagination;
