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
      tags: ["Nextjs", "Typescript", "ExpressJS"],
      link: "https://squazzle.vercel.app/",
    },
    {
      title: "Techcon",
      description:
        "Techcon is a web application where users can discover the ideal technician services tailored to your requirements ",
      tags: ["NextJS", "Javascript", "Expressjs"],
      link: "https://techcon.com.ng/",
    },

    {
      title: "Hermes",
      description:
        "Hermes is an app where users can get trusted help to handle tasks and errands with speed ",
      tags: ["Html", "JavaScript", "ExpressJS"],
      link: "https://www.hermes.com.ng/",
    },
    {
      title: "Student Portal",
      description:
        "Student Portal is web application that integrates biometrics authentication. This application is still under construction",
      tags: ["Nextjs", "Javascript", "Auth0"],
      link: "https://student-portal-wheat.vercel.app/",
    },
    {
      title: "Aircraft status",
      description:
        "This application is used to keep track of life limited parts of aircraft and provide logging and documentation",
      tags: ["HTML", "Javascript", "ExpressJS"],
      link: "https://llp-status.vercel.app/",
    },
    {
      title: "Diety",
      description:
        "This application provides means for users with dietary conditions to discover delicious recipes for various dietary conditions.",
      tags: ["HTML", "Javascript", "ExpressJS"],
      link: "https://www.diety.com.ng/",
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
