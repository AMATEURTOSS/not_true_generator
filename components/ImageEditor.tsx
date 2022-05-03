import { FC, CSSProperties } from "react";

interface ImageEditorProps {
  text1: string;
}

const bannerHideDivStyle: CSSProperties = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "25%",
  height: "10%",
  backgroundColor: "#191F2E",
};

const text1HideDivStyle: CSSProperties = {
  position: "absolute",
  top: "15%",
  left: "-5%",
  width: "110%",
  height: "10%",
  fontSize: "clamp(1rem, 4vw, 2rem)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transform: "rotate(-5deg)",
  backgroundColor: "#fff",
};

const ImageEditor: FC<ImageEditorProps> = ({ text1 }): JSX.Element => {
  return (
    <div className="relative">
      <div style={bannerHideDivStyle} />
      <div style={text1HideDivStyle}>{text1}</div>
      <img src="/not_true.png" alt="not_true" className="w-full" />
    </div>
  );
};

export default ImageEditor;
