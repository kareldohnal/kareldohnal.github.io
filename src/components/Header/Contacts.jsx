import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const ContactContainer = styled.div(props =>({
  padding: 10,
  textAlign: "right",
  "& p": {
    margin: 0,
    "& a": {
      color: "black",
      textDecoration: "none"
    }
  }
}));

const Contacts = props => {
  return (
    <ContactContainer>
      <p><a href={"tel:+420602235137"}>+420 602 235 137</a></p>
      <p><a href={"mailto:+420602235137"}>karel.dohnal@gmail.com</a></p>
      <p>socky</p>
    </ContactContainer>
  );
};

Contacts.propTypes = {

};

export default Contacts;
