import React from "react";

function TextRotator() {
  return (
    <div className="py-4  rounded-md flex flex-col justify-center items-center max-lg:text-center overflow-hidden">
      <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
        I am a software developer with expertise in
        <span className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block text-left font-rubik text-xl sm:text-3xl leading-tight [&_li]:block animate-text-slide">
            <li className="text-[#2f7df4]">TypeScript</li>
            <li className="text-[#2f7df4]">Next.js</li>
            <li className="text-[#2f7df4]">React</li>
            <li className="text-[#2f7df4]">React Native</li>
            <li className="text-[#2f7df4]">Node.js</li>
            <li className="text-[#2f7df4]">SQL</li>
          </ul>
        </span>
      </div>
    </div>
  );
}

export default TextRotator;
