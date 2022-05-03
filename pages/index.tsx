import type { NextPage } from "next";
import ImageEditor from "../components/ImageEditor";

const Home: NextPage = () => {
  return (
    <div className="m-auto w-full max-w-xl">
      <ImageEditor />
    </div>
  );
};

export default Home;
