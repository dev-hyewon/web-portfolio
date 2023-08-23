import React, { createContext, useContext } from 'react';
import styled from 'styled-components';

const StyledFieldset = styled.fieldset`
  border: 0;
  & > legend {
    margin-bottom: 20px;
    color: ${(props) => props.$titleColor};
    font-weight: ${(props) => props.$titleFontWeight};
  }
  & > div {
    display: inline-flex;
    ${(props) => props.$column && 'flex-direction: column;'}
    flex-wrap: ${(props) => props.$flexWrap};
    align-items: ${(props) => props.$alignItems};
    gap: 10px;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  ${(props) => props.$column && 'flex-direction: column;'}
  gap: 5px;
`;

const RadioContext = createContext();

const Group = ({
  name,
  defaultValue,
  onChange,
  optionColum = false,
  column = false,
  flexWrap = 'wrap',
  alignItems = 'start',
  style,
  titleColor = 'inherit',
  titleFontWeight = 'bolder',
  title,
  children,
}) => {
  const context = { name, defaultValue, onChange, column: optionColum };
  return (
    <StyledFieldset
      $column={column}
      $flexWrap={flexWrap}
      $alignItems={alignItems}
      style={style}
      $titleColor={titleColor}
      $titleFontWeight={titleFontWeight}
    >
      <legend>{title}</legend>
      <div>
        <RadioContext.Provider value={context}>
          {children}
        </RadioContext.Provider>
      </div>
    </StyledFieldset>
  );
};

const Option = ({ value, disabled = false, children, column = false }) => {
  const { name, defaultValue, onChange } = useContext(RadioContext);
  return (
    <StyledLabel $column={column}>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={value === defaultValue}
        disabled={disabled}
        onChange={onChange}
      />
      {children}
    </StyledLabel>
  );
};

const Radio = { Group, Option };

export default Radio;
