import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { media } from '@styles';

export const PaginationSection = styled.section`
  position: relative;
  padding: 5vw 0 5vw;
`;
export const Row = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Col = styled(Link)`
  width: fit-content;
  text-decoration: none;
  color: var(--dark);
  svg {
    width: 3vw;
    height: 3vw;
    ${props =>
      props.next
        ? `
        margin-left: 3vw;
        transform: rotate(180deg);
    `
        : `margin-right: 3vw;`};
  }
`;
export const BigText = styled.h1`
  font-size: 8vw;
  margin: 0;
  font-family: var(--font-family-serif);
  font-weight: 700;

  ${media.thone`font-size: 12vw;`};
`;
