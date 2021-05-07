import React from 'react';
import { motion } from 'framer-motion';
import { HeroWrapper, BigTitle, FlexBetween, FlexCenter, Label, LabelText } from './style';
import { Container, Overflow } from '@styles';

const letterAnimation = {
  initial: {
    y: '100%',
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.05, -0.01, 0.9],
      duration: 1,
    },
  },
};

const Text = () => {
  return (
    <HeroWrapper>
      <Container>
        <Overflow>
          <BigTitle
            initial="initial"
            animate="animate"
            transition={{ delayChildren: 0.4, staggerChildren: 0.1 }}>
            <motion.span variants={letterAnimation}>K</motion.span>
            <motion.span variants={letterAnimation}>y</motion.span>
            <motion.span variants={letterAnimation}>r</motion.span>
            <motion.span variants={letterAnimation}>y</motion.span>
            <motion.span variants={letterAnimation}>l</motion.span>
            <motion.span variants={letterAnimation}>o</motion.span>
            <motion.span variants={letterAnimation}>—</motion.span>
          </BigTitle>
        </Overflow>
        <Overflow>
          <BigTitle
            initial="initial"
            animate="animate"
            transition={{ delayChildren: 0.8, staggerChildren: 0.1 }}>
            <motion.span variants={letterAnimation}>C</motion.span>
            <motion.span variants={letterAnimation}>r</motion.span>
            <motion.span variants={letterAnimation}>e</motion.span>
            <motion.span variants={letterAnimation}>a</motion.span>
            <motion.span variants={letterAnimation}>t</motion.span>
            <motion.span variants={letterAnimation}>i</motion.span>
            <motion.span variants={letterAnimation}>v</motion.span>
            <motion.span variants={letterAnimation}>e</motion.span>
          </BigTitle>
        </Overflow>
        <Overflow>
          <BigTitle
            initial="initial"
            animate="animate"
            transition={{ delayChildren: 1.2, staggerChildren: 0.1 }}>
            <motion.span variants={letterAnimation}>D</motion.span>
            <motion.span variants={letterAnimation}>e</motion.span>
            <motion.span variants={letterAnimation}>s</motion.span>
            <motion.span variants={letterAnimation}>i</motion.span>
            <motion.span variants={letterAnimation}>g</motion.span>
            <motion.span variants={letterAnimation}>n</motion.span>
            <motion.span variants={letterAnimation}>e</motion.span>
            <motion.span variants={letterAnimation}>r</motion.span>
          </BigTitle>
        </Overflow>
        <FlexBetween>
          <Overflow>
            <BigTitle
              initial="initial"
              animate="animate"
              transition={{ delayChildren: 1.6, staggerChildren: 0.1 }}>
              <motion.span variants={letterAnimation}>a</motion.span>
              <motion.span variants={letterAnimation}>n</motion.span>
              <motion.span variants={letterAnimation}>d</motion.span>
            </BigTitle>
          </Overflow>
          <FlexCenter>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, ease: [0.6, 0.05, -0.01, 0.9], duration: 1 }}>
              <Label>Awards</Label>
              <LabelText>awwwards.com (x2)</LabelText>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, ease: [0.6, 0.05, -0.01, 0.9], duration: 1 }}>
              <Label>Portfolio</Label>
              <LabelText>Version 5</LabelText>
            </motion.div>
          </FlexCenter>
        </FlexBetween>
        <Overflow>
          <BigTitle
            initial="initial"
            animate="animate"
            transition={{ delayChildren: 2, staggerChildren: 0.1 }}>
            <motion.span variants={letterAnimation}>D</motion.span>
            <motion.span variants={letterAnimation}>e</motion.span>
            <motion.span variants={letterAnimation}>v</motion.span>
            <motion.span variants={letterAnimation}>e</motion.span>
            <motion.span variants={letterAnimation}>l</motion.span>
            <motion.span variants={letterAnimation}>o</motion.span>
            <motion.span variants={letterAnimation}>p</motion.span>
            <motion.span variants={letterAnimation}>e</motion.span>
            <motion.span variants={letterAnimation}>r</motion.span>
          </BigTitle>
        </Overflow>
        <FlexBetween>
          <Overflow>
            <BigTitle
              initial="initial"
              animate="animate"
              transition={{ delayChildren: 2.4, staggerChildren: 0.1 }}>
              <motion.span variants={letterAnimation}>B</motion.span>
              <motion.span variants={letterAnimation}>a</motion.span>
              <motion.span variants={letterAnimation}>s</motion.span>
              <motion.span variants={letterAnimation}>e</motion.span>
              <motion.span variants={letterAnimation}>d</motion.span>
            </BigTitle>
          </Overflow>
          <Overflow>
            <BigTitle
              initial="initial"
              animate="animate"
              transition={{ delayChildren: 2.8, staggerChildren: 0.1 }}>
              <motion.span variants={letterAnimation}>I</motion.span>
              <motion.span variants={letterAnimation}>n</motion.span>
            </BigTitle>
          </Overflow>
        </FlexBetween>
        <FlexBetween>
          <div></div>
          <Overflow>
            <BigTitle
              initial="initial"
              animate="animate"
              transition={{ delayChildren: 3.2, staggerChildren: 0.1 }}>
              <motion.span variants={letterAnimation}>N</motion.span>
              <motion.span variants={letterAnimation}>e</motion.span>
              <motion.span variants={letterAnimation}>w&nbsp;</motion.span>
              <motion.span variants={letterAnimation}>Y</motion.span>
              <motion.span variants={letterAnimation}>o</motion.span>
              <motion.span variants={letterAnimation}>r</motion.span>
              <motion.span variants={letterAnimation}>k</motion.span>
            </BigTitle>
          </Overflow>
        </FlexBetween>
      </Container>
    </HeroWrapper>
  );
};

export default Text;
