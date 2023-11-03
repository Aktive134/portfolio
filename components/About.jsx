import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/brand/dev-ed-wave.png";

const About = () => {
  return (
    <div id="about" className="w-full bg-black md:h-screen p-4 flex items-center py-12 md:px-32">
      <div className="max-w-[1240] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase font-bold text-xl tracking-widest text-[#ffffff]">
            About
          </p>
          <h2 className="py-4 text-[#ffffff] text-4xl">Meet Me...</h2>
          <p className="text-xl text-gray-300 py-2">
          As a Software engineer, I have acquired extensive skills and knowledge<br/>
          in technologies that compose this robust web development stack: <br/>
          MongoDB, Express, React, Node.js and PHP. <br/>
          My journey in web development has ignited a deep passion for creating web applications that are not just scalable and efficient but also reliable and robust.
          </p>
          <p className="text-xl text-gray-300 py-2">
          One of the aspects I find most fulfilling about software development is the art of problem-solving. 
          Whether it involves debugging, optimizing code performance, or implementing new features, 
          I thrive on the challenge of devising sophisticated solutions to intricate problems.
          </p>
          <p className="text-xl text-gray-300 py-2">
          In addition to my technical knowledge, I approach every project with a design thinker&rsquo;s mindset.<br/>
          I prioritize the user, striving to create interfaces that are both intuitive and user-friendly, ultimately enhancing the overall user experience.<br/>
          By blending my technical acumen with this design thinking approach,<br/>
          I can craft innovative solutions that align with both business objectives and user needs.<br/>
          </p>
        </div>
        <div className="cursor-pointer shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-110 ease-in duration-300">
          <Image
            className="rounded-xl bg-slate-300"
            src={AboutImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
