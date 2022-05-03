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
  zIndex: "999",
};

const text2HideDivStyle: CSSProperties = {
  position: "absolute",
  top: "28%",
  left: "-5%",
  width: "50%",
  height: "7%",
  transform: "rotate(1deg)",
  clipPath: "polygon(0 0, 97% 0, 93% 100%, 0% 100%)",
  backgroundColor: "#191F2E",
};

const text3HideDivStyle: CSSProperties = {
  position: "absolute",
  top: "29%",
  left: "60%",
  width: "50%",
  height: "8%",
  transform: "rotate(1deg)",
  clipPath: "polygon(6% 0, 100% 0, 100% 100%, 10.5% 100%)",
  backgroundColor: "#191F2E",
};

const ImageEditor: FC<ImageEditorProps> = ({ text1 }): JSX.Element => {
  return (
    <div className="relative overflow-hidden">
      <div style={bannerHideDivStyle} />
      <div style={text1HideDivStyle}>{text1}</div>
      <div style={text2HideDivStyle} />
      <div style={text3HideDivStyle} />
      <img src="/not_true.png" alt="not_true" className="w-full" />
    </div>
  );
};

export default ImageEditor;
