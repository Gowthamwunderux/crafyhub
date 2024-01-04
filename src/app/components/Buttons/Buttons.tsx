import React from "react";
interface ButtonProps {
  label: string;
}
const ExtraSmallButton: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button
      type="button"
      className=" w-32 px-3 py-2 text-xs font-medium text-center text-white bg-pink rounded-lg hover:bg-pink-700"
    >
      {label}
    </button>
  );
};

interface ButtonProps {
  label: string;
}
const SmallButton: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button
      type="button"
      className="w-40 px-3 py-2 text-xs font-medium text-center text-white bg-pink rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {label}
    </button>
  );
};

interface ButtonProps {
  label: string;
}
const LargeButton: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button
      type="button"
      className="w-96 px-3 py-3 text-sm font-medium text-center text-white bg-pink rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {label}
    </button>
  );
};

export { SmallButton, ExtraSmallButton, LargeButton };
