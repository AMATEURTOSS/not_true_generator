import { Dispatch, FC, SetStateAction } from "react";

interface TextInputProps {
  label: string;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

const TextInput: FC<TextInputProps> = ({
  label,
  text,
  setText,
}): JSX.Element => {
  return (
    <label className="mt-8 block">
      <span className="block text-gray-400">{label}</span>
      <input
        className="w-full border-b text-2xl outline-none focus:border-b-blue-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
};

export default TextInput;
