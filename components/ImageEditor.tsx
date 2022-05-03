import { FC } from "react";

interface ImageEditorProps {
  text1: string;
  text2: string;
  text3: string;
}

const ImageEditor: FC<ImageEditorProps> = (props): JSX.Element => {
  return (
    <>
      <img src="/not_true.png" alt="not_true" className="w-full" />
    </>
  );
};

export default ImageEditor;
