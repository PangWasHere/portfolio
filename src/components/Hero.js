import React from 'react';
import styled from 'styled-components';

const first_name = "Farrah";
const last_name = "Chavez";

const Hero = () => (
  <Section>
    <Content>
      <Title>{first_name}</Title>
      <Title>{last_name}</Title>
    </Content>
  </Section>
);

const Section = styled.section`
  display: flex;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.div`
  display: block;
  font-size: calc(100vh / 4);
  font-family: "Jomhuria", serif;
  font-weight: 400;
  font-style: normal;
  line-height: 0.5;
  user-select: none;
`;

export default Hero;
