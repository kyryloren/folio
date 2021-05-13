import React from 'react';
import { GallerySection, RandomImageContainer, RandomImage } from './style';
import { Container } from '@styles';

const Gallery = ({ data }) => {
  return (
    <GallerySection>
      <Container>
        {data.gallery.map((image, index) => (
          <RandomImageContainer key={index}>
            <RandomImage image={image.gatsbyImageData} alt={image.alt} />
          </RandomImageContainer>
        ))}
      </Container>
    </GallerySection>
  );
};

export default Gallery;
