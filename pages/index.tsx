import type { NextPage } from "next";
import ImageEditor from "../components/ImageEditor";
import { useState } from "react";
import TextInput from "../components/TextInput";

const Home: NextPage = () => {
  const [text1, setText1] = useState<string>(
    "n번방 방지법은 사적검열 우려가 있다?"
  );
  const [text2, setText2] = useState<string>("개인이 주고받는 사적인 카톡");
  const [text3, setText3] = useState<string>("도 들여다 본다고?");
  const [isTrue, setIsTrue] = useState<boolean>(false);

  return (
    <div className="m-auto w-full max-w-xl">
      <ImageEditor {...{ text1, text2, text3 }} />
      <TextInput label="text1" text={text1} setText={setText1} />
      <TextInput label="text2" text={text2} setText={setText2} />
      <TextInput label="text3" text={text3} setText={setText3} />
    </div>
  );
};

export default Home;
