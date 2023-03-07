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
          As a MERN stack engineer, I have acquired extensive skills and knowledge<br/>
          in the four primary technologies that compose this robust web development stack: <br/>
          MongoDB, Express, React, and Node.js.<br/>
          My experience with MERN has ignited a strong passion within me for constructing<br/>
          web applications that are not only scalable and efficient but also resilient and dependable.<br/>
          </p>
          <p className="text-xl text-gray-300 py-2">
          One of the aspects I find most fulfilling about MERN stack development is the art of problem-solving. 
          Whether it involves debugging, optimizing code performance, or implementing new features, 
          I thrive on the challenge of devising sophisticated solutions to intricate problems.
          </p>
          <p className="text-xl text-gray-300 py-2">
          Beyond my technical expertise, I also consider myself a design thinker. 
          I take a user-centered approach to every project, striving to craft interfaces that are intuitive and 
          user-friendly, elevating the overall user experience. 
          By blending my technical aptitude with my design thinking methodology, I am capable of creating 
          innovative solutions that cater to both business objectives and end-users.
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
