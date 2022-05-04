import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import domtoimage from "dom-to-image";
import ImageEditor from "../components/ImageEditor";
import TextInput from "../components/TextInput";
import SelectTwoOfOneButton from "../components/SelectTwoOfOneButton";

const Home: NextPage = () => {
  const [text1, setText1] = useState<string>(
    "n번방 방지법은 사적검열 우려가 있다?"
  );
  const [isTrue, setIsTrue] = useState<boolean>(false);

  function save() {
    const image = document.getElementById("image");
    if (image) {
      domtoimage
        .toPng(image)
        .then(function (dataUrl) {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "not_true.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(function (error) {
          console.error("새로고침 후 다시 시도해주세요...", error);
        });
    } else {
      alert("새로고침 후 다시 시도해주세요...");
    }
  }

  return (
    <>
      <Head>
        <title>사실이 아닙니다! 생성기</title>
      </Head>
      <div className="m-auto w-full max-w-xl p-6">
        <ImageEditor text1={text1} isTrue={isTrue} />
        <TextInput label="text1" text={text1} setText={setText1} />
        <SelectTwoOfOneButton
          button1InnerText="사실이 아닙니다!"
          button2InnerText="사실이 맞습니다!"
          isTrue={isTrue}
          setIsTrue={setIsTrue}
        />
        <button
          className="mt-8 w-full bg-blue-400 p-3 text-white"
          onClick={save}
        >
          저장하기
        </button>
      </div>
    </>
  );
};

export default Home;
