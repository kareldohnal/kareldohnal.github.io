import React from 'react';
// import PropTypes from 'prop-types';
import Highlights from "./Highlights";
import LanguagePicker from "./LanguagePicker";
import Contacts from "./Contacts";
import styled from "styled-components";

const HeaderContainer = styled.div(props =>({
  display: "flex",
  justifyContent: "space-between"
}));

const Header = () => {
  return (
    <HeaderContainer>
      <Highlights/>
      <LanguagePicker/>
      <Contacts/>
    </HeaderContainer>
  );
};

// Header.propTypes = {};

export default Header;
