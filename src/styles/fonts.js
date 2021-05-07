import { css } from 'styled-components';

import BigillaRegularWOFF from '@fonts/bigilla/Bigilla.woff';
import BigillaRegularWOFF2 from '@fonts/bigilla/Bigilla.woff2';
import BigillaRegularBoldWOFF from '@fonts/bigilla/Bigilla-Bold.woff';
import BigillaRegularBoldWOFF2 from '@fonts/bigilla/Bigilla-Bold.woff2';

import SKModernistRegularWOFF from '@fonts/sk-modernist/Sk-Modernist-Regular.woff';
import SKModernistRegularWOFF2 from '@fonts/sk-modernist/Sk-Modernist-Regular.woff2';

const bigillaWeights = {
  400: [BigillaRegularWOFF, BigillaRegularWOFF2],
  700: [BigillaRegularBoldWOFF, BigillaRegularBoldWOFF2],
};

const skModernistWeights = {
  400: [SKModernistRegularWOFF, SKModernistRegularWOFF2],
};

const bigilla = {
  name: 'bigilla',
  normal: bigillaWeights,
};

const skModernist = {
  name: 'sk-modernist',
  normal: skModernistWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const bigillaRegular = createFontFaces(bigilla);
const skModernistRegular = createFontFaces(skModernist);

const Fonts = css`
  ${skModernistRegular + bigillaRegular}
`;

export default Fonts;
