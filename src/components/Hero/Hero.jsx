import React from 'react';
import {useLanguage} from "../../context/languageContext";
import { css } from '@emotion/react';
import styled from "styled-components";

const HeroContainer = styled.div(props =>({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "-10%",
  "& p": {
    margin: 4,
  },
}));

const HeroName = styled.p(props =>({
fontSize: 64,
}));

const HeroDesc = styled.p(props =>({
  fontSize: 36,
}));

const ColoredSpan = styled.span(props =>({
  color: "#e30b5d",
  fontWeight: "bold",
}));

export const Hero = () => {
  const { language } = useLanguage()
    return (
      <HeroContainer>
        <HeroName><ColoredSpan>Karel</ColoredSpan> Dohnal</HeroName>
        <HeroDesc className={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: white;
      }
    `}><ColoredSpan>{language.data.fullstack_dev}</ColoredSpan> / {language.data.author_of}{" "}{language.data.cms}{" "}<ColoredSpan>{language.data.gosmonaut}</ColoredSpan></HeroDesc>
      </HeroContainer>
    );
};
