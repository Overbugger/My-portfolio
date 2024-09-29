import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { User2 } from "lucide-react";
import SkillsFooter from "@/components/SkillsFooter";

import { Lightbulb } from "lucide-react";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import node from "../../../public/nodeJS.png";
import js from "../../../public/js.png";
import ts from "../../../public/ts.png";
import react from "../../../public/react.png";
import nextjs from "../../../public/nextjs.jpeg";
import tailwind from "../../../public/tailwindcss.png";

const page = () => {
  const stack1 = [
    { alt: "HTML", img: html },
    { alt: "CSS", img: css },
    { alt: "JAVASCRIPT", img: js },
    { alt: "TYPESCRIPT", img: ts },
  ];

  const stack2 = [
    { alt: "REACT", img: react },
    { alt: "NEXT.JS", img: nextjs },
    { alt: "NODE.JS", img: node },
    { alt: "TAILWIND", img: tailwind },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3 mb-4">
        <Heading>Software Developer.</Heading>

        <FramerWrapper y={0} x={100}>
          <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg">
            I’m a passionate software developer with expertise in both web
            development and mobile app development. With a focus on building
            responsive, user-friendly applications, I enjoy transforming ideas
            into functional, efficient digital solutions. Whether it’s creating
            dynamic websites or crafting intuitive mobile experiences, I’m
            dedicated to delivering high-quality results that solve real-world
            problems.
          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper className="block" y={100} delay={0.32}>
        <h1 className="gap-2 text-2xl font-poppins text-primary font-bold flex text_underline relative max-sm:text-xl">
          <Lightbulb className="h-5 w-5 font-bold" /> Tech Stack
        </h1>
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full h-fit flex-row flex justify-center items-center">
            <SkillsFooter items={stack1} />
          </div>
          <div className="w-full h-fit flex-row flex justify-center items-center">
            <SkillsFooter items={stack2} />
          </div>
        </div>
      </FramerWrapper>
      {/* <FramerWrapper
        className="w-full flex flex-row justify-between max-lg:flex-col "
        y={100}
        delay={0.3}
      >
        <Aboutfooter />
      </FramerWrapper> */}
    </div>
  );
};

export default page;
