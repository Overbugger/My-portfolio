import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Squazzle",
      description:
        "Squazzle is an app that offers the easiest way to find the property of your choice ",
      tags: ["NextJS", "Typescript", "ExpressJS"],
      link: "https://squazzle.vercel.app/",
    },
    {
      title: "Hermes",
      description:
        "Hermes is an app where users can get trusted help to handle tasks and errands with speed ",
      tags: ["HTML", "JavaScript", "ExpressJS"],
      link: "https://hermes-ng.vercel.app/",
    },
     {
      title: "Owasp visualizer",
      description:
        "This app provides a comprehensive visual analysis of potential OWASP Top 10 vulnerabilities.",
      tags: ["NextJS", "Typescript", "Docker"],
      link: "https://owasp10-visualiser.vercel.app/",
    },
    {
      title: "Fine Card",
      description:
        "Fine Card helps users personalize their payment card with images of their choice - loved ones, cherished memories or fun moments.",
      tags: ["NextJS", "Typescript", "Shadcn UI"],
      link: "https://finecard.vercel.app/",
    },
    {
      title: "Diety",
      description:
        "Diety provides means for users with dietary conditions to discover delicious recipes for various dietary conditions.",
      tags: ["HTML", "Javascript", "ExpressJS"],
      link: "https://diety.vercel.app/",
    },
    {
      title: "Aircraft status",
      description:
        "This application is used to keep track of life limited parts of aircraft and provide logging and documentation",
      tags: ["HTML", "Javascript", "ExpressJS"],
      link: "https://llp-status.vercel.app/",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
