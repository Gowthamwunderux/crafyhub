import React from "react";
interface ButtonProps {
  label: string;
  className:string;
}
const ExtraSmallButton: React.FC<ButtonProps> = ({ label ,className }) => {
  return (
    <button
      type="button"
      className={className}
    >
      {label}
    </button>
  );
};

interface ButtonProps {
  label: string;
  className:string;
}
const SmallButton: React.FC<ButtonProps> = ({ label ,className}) => {
  return (
    <button
      type="button"
      className={className}
    >
      {label}
    </button>
  );
};

interface ButtonProps {
  label: string;
  className:string;
}
const LargeButton: React.FC<ButtonProps> = ({ label,className }) => {
  return (
    <button
    type="submit"
    className={className}
  >
   {label}
  </button>
  );
};

export { SmallButton, ExtraSmallButton, LargeButton };
