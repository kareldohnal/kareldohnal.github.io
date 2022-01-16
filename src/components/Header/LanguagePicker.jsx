import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useLanguage} from "../../context/languageContext";
import {ToggleSwitch} from "spacebar-ui"
import styled from "styled-components";

const LanguagePickerContainer = styled.div(props =>({
 position: "absolute",
  left: "50%",
  top: 25,
  transform: "translate(-50%, -50%)",
}));

const LanguagePickerInnerContainer = styled.div(props =>({
  display: "flex",
  alignItems: "center",
  marginTop: 12,
}));

const LanguagePicker = () => {
  const [checked, setChecked] = useState(false)
  const { switchLanguage } = useLanguage()

  useEffect(() => {
    switchLanguage(checked)
  }, [checked])

  return (
    <LanguagePickerContainer>
      <LanguagePickerInnerContainer>
    {"CZ"}
    <ToggleSwitch backgroundChecked={'#aab4be'} backgroundUnchecked={'#aab4be'} switchColor={'#e30b5d'} checked={checked} setChecked={setChecked} />
    {"EN"}
      </LanguagePickerInnerContainer>
    </LanguagePickerContainer>
  );
};

LanguagePicker.propTypes = {

};

export default LanguagePicker;
