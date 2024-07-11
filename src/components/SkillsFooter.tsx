"use client"

import Image from "next/image";
import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useState } from "react";


interface MyComponentProps{
    items:Array<{ alt: string; img: any }>
}

const SkillsFooter:React.FC<MyComponentProps> = ({items}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      { items && items.map((val, indx) => {
        return (
          <TooltipProvider key={val?.alt}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="p-4"
                >
                  <Image
                    src={val?.img}
                    alt={val?.alt}
                    className="rounded-full w-auto max-h-20 cursor-pointer"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{val?.alt}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </>
  );
};

export default SkillsFooter;
