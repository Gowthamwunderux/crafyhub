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
  const listitem = document.getElementById("listitem") as HTMLInputElement 

  const inputfield = document.getElementById("search") as HTMLInputElement 

  console.log("input"+listitem)

  if(listitem){
    inputfield.addEventListener("focus",function(){
      listitem.classList.add("w-h")
     })
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
        id="search"
      />
    <div>
          <ul className="bg-gray-100 mx-auto rounded-md mt-px lg:min-w-[780px] webkit-overflow-scrolling webkitscrollbar" id="listitem">
        {filteredDesigners.map((designer, index) => (
          <li className="" key={index}>
            {" "}
            {designer.name}
          </li>
        ))}
      </ul>
    </div>
  
    </div>
  );
};

export default AutocompleteInput;
