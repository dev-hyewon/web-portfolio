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
  cursor: pointer;
  display: flex;
  ${(props) => props.$column && 'flex-direction: column;'}
  gap: 5px;
  & input[type='radio'] {
    height: 1rem;
    aspect-ratio: 1;
    border: calc(1rem / 8) solid #939393;
    padding: calc(1rem / 8);
    background: radial-gradient(farthest-side, var(--point1-color) 94%, #0000)
      50%/0 0 no-repeat content-box;
    border-radius: 50%;
    outline-offset: calc(1rem / 10);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: inherit;
    font-size: inherit;
    transition: 0.3s;
  }
  & input[type='radio']:checked {
    border-color: var(--point1-color);
    background-size: 100% 100%;
  }
  & input[type='radio']:hover {
    border-color: var(--point1-color);
  }
  & input[type='radio']:disabled {
    background: linear-gradient(#939393 0 0) 50%/100% 20% no-repeat content-box;
    opacity: 0.5;
  }
  &:has(input[type='radio']:disabled) {
    cursor: not-allowed;
  }
`;

const RadioContext = createContext();

const Group = ({
  name,
  checkedValue,
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
  const context = {
    name,
    checkedValue,
    defaultValue,
    onChange,
    column: optionColum,
  };
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
  const { name, checkedValue, defaultValue, onChange } =
    useContext(RadioContext);
  const isControlled = checkedValue !== undefined;
  return (
    <StyledLabel $column={column}>
      <input
        type="radio"
        value={value}
        name={name}
        checked={isControlled ? value === checkedValue : undefined}
        defaultChecked={!isControlled ? value === defaultValue : undefined}
        disabled={disabled}
        onChange={onChange}
      />
      {children}
    </StyledLabel>
  );
};

const Radio = { Group, Option };

export default Radio;
