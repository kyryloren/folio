/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useState, useMemo, useContext } from 'react';
import { PaginationSection, Row, Col, BigText } from './style';
import { CursorContext } from '@components';
import { Container } from '@styles';

const Pagination = ({ data }) => {
  const { setImage } = useContext(CursorContext);
  const [hoveringPrev, setHoveringPrev] = useState(false);
  const [hoveringNext, setHoveringNext] = useState(false);

  useMemo(() => {
    if (hoveringPrev)
      setImage({
        hovering: true,
        url: data.previous.cover.url,
        alt: data.previous.cover.alt && data.previous.cover.alt,
      });
    else
      setImage({
        hovering: false,
        url: data.previous.cover.url,
        alt: data.previous.cover.alt && data.previous.cover.alt,
      });
  }, [hoveringPrev]);

  useMemo(() => {
    if (hoveringNext)
      setImage({
        hovering: true,
        url: data.next.cover.url,
        alt: data.next.cover.alt && data.next.cover.alt,
      });
    else
      setImage({
        hovering: false,
        url: data.next.cover.url,
        alt: data.next.cover.alt && data.next.cover.alt,
      });
  }, [hoveringNext]);

  return (
    <PaginationSection>
      <Container>
        <Row>
          <Col to={`/${data.previous.slug}`} id="cursor_hide">
            <Row
              onMouseEnter={() => setHoveringPrev(true)}
              onMouseLeave={() => setHoveringPrev(false)}>
              <div>
                <BigText>Previous</BigText>
                <BigText>Project</BigText>
              </div>
            </Row>
          </Col>
          <Col next to={`/${data.next.slug}`} id="cursor_hide">
            <Row
              onMouseEnter={() => setHoveringNext(true)}
              onMouseLeave={() => setHoveringNext(false)}>
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
