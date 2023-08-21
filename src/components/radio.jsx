import React, { createContext, useContext } from 'react';

const RadioContext = createContext();

const Group = ({ title, name, defaultValue, onChange, children }) => {
  const context = { name, defaultValue, onChange };
  return (
    <fieldset>
      <legend>{title}</legend>
      <RadioContext.Provider value={context}>{children}</RadioContext.Provider>
    </fieldset>
  );
};

const Option = ({ value, disabled = false, children }) => {
  const { name, defaultValue, onChange } = useContext(RadioContext);
  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={value === defaultValue}
        disabled={disabled}
        onChange={onChange}
      />
      {children}
    </label>
  );
};

const Radio = { Group, Option };

export default Radio;
