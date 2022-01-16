import React from 'react';
import PropTypes from 'prop-types';
import {useLanguage} from "../../context/languageContext";
import styled from "styled-components";

const HighlightsContainer = styled.div(props =>({
  display: "flex",
  flexDirection: "column",
  padding: 10,
  "& p": {
    margin: 0,
    whiteSpace: "nowrap",
  }
}));

const ColoredSpan = styled.span(props =>({
  color: "#e30b5d",
  fontWeight: "bold",
}));

const Highlights = props => {
  const { language } = useLanguage()

  return (
    <HighlightsContainer>
      <p><ColoredSpan>{language.data.fullstack_dev}</ColoredSpan>{" "}{language.data.with_analytical_experience}</p>
      <p>{language.data.cofounder_of}{" "}<ColoredSpan>{language.data.sbk}</ColoredSpan></p>
      <p>{language.data.author_of}{" "}{language.data.cms}{" "}<ColoredSpan>{language.data.gosmonaut}</ColoredSpan></p>
    </HighlightsContainer>
  );
};

Highlights.propTypes = {

};

export default Highlights;
