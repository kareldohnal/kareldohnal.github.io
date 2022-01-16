import React from 'react';
import {Footer} from '../../components/Footer/Footer';
import {Hero} from '../../components/Hero/Hero';
import Header from "../../components/Header/Header";
import styled from "styled-components";

const LandingContainer = styled.div(props =>({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const Landing = () => {
  return (
      <LandingContainer>
        <Header />
        <Hero/>
        <Footer/>
      </LandingContainer>
  );
};
