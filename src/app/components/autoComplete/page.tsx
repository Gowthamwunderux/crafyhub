"use client";
import React, { useState, useRef, useEffect } from "react";
 
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
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const listRef = useRef<HTMLUListElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
 
  useEffect(() => {
    const list = listRef.current;
    const input = inputRef.current;
 
    if (list && input) {
      const handleFocus = () => {
        list.classList.add("w-h");
      };
 
      const handleBlur = () => {
        list.classList.remove("w-h");
      };
 
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);
 
      return () => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      };
    }
  }, []);
 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
 
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
        ref={inputRef}
      />
      <div>
        <ul className="bg-gray-100 mx-auto rounded-md mt-px lg:min-w-[780px] webkit-overflow-scrolling webkitscrollbar" id="listitem" ref={listRef}>
          {filteredDesigners.map((designer, index) => (
            <li className="list-item lg:text-lg p-2 mt-1 mr-0" key={index}>
              {designer.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
 
export default AutocompleteInput;