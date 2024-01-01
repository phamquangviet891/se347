import React, { useEffect, useState } from "react";

const AppTextInput = ({
  id,
  name,
  className = "w-full border rounded-md p-2",
  placeholder,
  setTextValue,
  textValue,
}) => {
  const [value, setValue] = useState(textValue);
  useEffect(() => {
    setValue(textValue);
  }, [textValue]);
  return (
    <input
      type="text"
      id={id}
      name={name}
      className={className}
      placeholder={placeholder}
      onChange={(e) => setValue(e.nativeEvent.target.value)}
      value={value}
      onBlur={() => {
        setTextValue(value);
      }}
    />
  );
};

export default AppTextInput;
