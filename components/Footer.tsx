import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="flex w-full justify-center bg-gray-800 p-6">
      <div className="flex flex-col items-center">
        <a
          href="https://github.com/AMATEURTOSS/not_true_generator"
          target="_blank"
          rel="noreferrer"
          className="text-3xl text-blue-400"
        >
          <i className="ri-github-fill" />
        </a>
        <span className="text-gray-400">© 2022 All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
