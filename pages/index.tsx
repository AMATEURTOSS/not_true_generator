import type { NextPage } from "next";
import ImageEditor from "../components/ImageEditor";
import { useState } from "react";
import TextInput from "../components/TextInput";

const Home: NextPage = () => {
  const [text1, setText1] = useState<string>(
    "n번방 방지법은 사적검열 우려가 있다?"
  );
  const [isTrue, setIsTrue] = useState<boolean>(false);

  return (
    <div className="m-auto w-full max-w-xl p-6">
      <ImageEditor text1={text1} />
      <TextInput label="text1" text={text1} setText={setText1} />
    </div>
  );
};

export default Home;
