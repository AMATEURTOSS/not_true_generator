import { FC, CSSProperties } from "react";

interface ImageEditorProps {
  text1: string;
  isTrue: boolean;
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
  clipPath: "polygon(0 0, 96.4% 0, 92.54% 100%, 0% 100%)",
  backgroundColor: "#191F2E",
};

const text3HideDivStyle: CSSProperties = {
  position: "absolute",
  top: "29%",
  left: "60%",
  width: "50%",
  height: "8%",
  transform: "rotate(1deg)",
  clipPath: "polygon(5.7% 0, 100% 0, 100% 100%, 10% 100%)",
  backgroundColor: "#191F2E",
};

const isTrueDivStyle: CSSProperties = {
  position: "absolute",
  top: "75%",
  left: "10%",
  width: "80%",
  height: "19%",
  fontSize: "clamp(1rem, 10vw, 4rem)",
  textAlign: "center",
  color: "white",
  backgroundColor: "#82978A",
};

const ImageEditor: FC<ImageEditorProps> = ({ text1, isTrue }): JSX.Element => {
  return (
    <div id="image">
      <div className="relative overflow-hidden">
        <div style={bannerHideDivStyle} />
        <div style={text1HideDivStyle}>{text1}</div>
        <div style={text2HideDivStyle} />
        <div style={text3HideDivStyle} />
        <div style={isTrueDivStyle}>
          {isTrue ? "사실이 맞습니다!" : "사실이 아닙니다!"}
        </div>
        <img src="/not_true.png" alt="not_true" className="w-full" />
      </div>
    </div>
  );
};

export default ImageEditor;
