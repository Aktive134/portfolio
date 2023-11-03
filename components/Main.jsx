import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import useDownloader from 'react-use-downloader';

const Main = () => {
  const { download } = useDownloader();
  const fileUrl = '/raymondumukoroCV.pdf';
  const fileName = 'raymondumukoroCV.pdf';
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-md text-gray-600 tracking-widest test-gray-600">
            Good programmers know what to write. <br/>Great ones know what to rewrite
            and reuse!
          </p>
          <h1 className="py-4 sm:text-lg text-3xl font-bold text-gray-800">
            Hi, I am <span className="text-[#5651e5]">R</span>aymond{' '}
            <span className="text-[#5651e5]">U</span>mukoro. <br />
          </h1>
          <p className="py-4 m-auto max-w-[70%] text-gray-600 text-md mt-1">
          A <span className="text-[#5651e5]">Software Engineer</span> and <span className="text-[#5651e5]">Design Thinker</span> {" "}
          with a deep passion for creating scalable and robust web applications.<br/>
          Problem-solving is where I find my greatest joy.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
              <a
                href="https://github.com/Aktive134"
                target="_blank"
                rel="noreferrer">
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 ">
              <a
                href="https://www.linkedin.com/in/raymond-oke-oghene-umukoro/"
                target="_blank"
                rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
            <div
              onClick={() => download(fileUrl, fileName)}
              className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
