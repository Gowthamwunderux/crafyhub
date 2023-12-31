"use client";
import React, { useState } from "react";

interface AutocompleteProps {
  suggestions: { name: string }[];
  className: string;
  placeHolder: string;
}

const AutocompleteInput: React.FC<AutocompleteProps> = ({
  suggestions,
  className,
  placeHolder,
}) => {
  const [value, setValue] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  const filteredDesigners = suggestions.filter((data) =>
    value === "" ? false : data.name.toLowerCase().includes(value.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder={placeHolder}
        className={className}
        onChange={handleChange}
      />

      <ul>
        {filteredDesigners.map((designer, index) => (
          <li className={className} key={index}>
            {" "}
            {designer.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutocompleteInput;
