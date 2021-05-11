import { css } from 'styled-components';
import media from './media';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  linkStyles: css`
    text-decoration: none;
    color: inherit;
  `,
  largeTitle: css`
    margin: 0;
    line-height: 95%;
    font-weight: 400;
    text-transform: uppercase;
    font-family: var(--font-family-serif);
  `,
  midText: css`
    font-size: 3vw;
    line-height: 120%;
    text-transform: uppercase;
    ${media.thone`font-size: 24px;`};
  `,
  smallText: css`
    font-size: 1.4vw;
    line-height: 120%;
    text-transform: uppercase;
    ${media.thone`font-size: 16px;`};
  `,
  animLink: css`
    position: relative;

    :after,
    :before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: currentColor;
      transition: transform 1.1s cubic-bezier(0.19, 1, 0.22, 1);
    }
    :before {
      transition-delay: 0s;
      transform: scaleX(0);
      transform-origin: left;
    }
    :after {
      transform-origin: right;
    }
    :after,
    :hover:before {
      transition-delay: 0.25s;
    }
    :hover:before {
      transform: scaleX(1);
    }
    :hover:after {
      transition-delay: 0s;
      transform: scaleX(0);
    }
  `,
};

export default mixins;
