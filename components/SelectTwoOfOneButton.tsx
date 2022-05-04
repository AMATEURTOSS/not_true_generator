import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";

interface SelectTwoOfOneButtonProps {
  label: string;
  button1InnerText: string;
  button2InnerText: string;
  isTrue: boolean;
  setIsTrue: Dispatch<SetStateAction<boolean>>;
}

const SelectTwoOfOneButton: FC<SelectTwoOfOneButtonProps> = ({
  label,
  button1InnerText,
  button2InnerText,
  isTrue,
  setIsTrue,
}): JSX.Element => {
  const button1 = useRef<HTMLButtonElement>(null);
  const button2 = useRef<HTMLButtonElement>(null);

  return (
    <div className="mt-6">
      <span className="block text-gray-400">{label}</span>
      <div className="flex items-center">
        <button
          className={`w-1/2 border p-3 ${
            isTrue ? "" : "bg-blue-400 text-white"
          }`}
          ref={button1}
          onClick={() => setIsTrue(false)}
        >
          {button1InnerText}
        </button>
        <button
          className={`w-1/2 border p-3 ${
            isTrue ? "bg-blue-400 text-white" : ""
          }`}
          ref={button2}
          onClick={() => setIsTrue(true)}
        >
          {button2InnerText}
        </button>
      </div>
    </div>
  );
};

export default SelectTwoOfOneButton;
