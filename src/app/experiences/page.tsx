import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFooter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from '../../../public/html.png'
import css from '../../../public/css.png'
import scss from '../../../public/scss.png'
import js from '../../../public/js.png'
import ts from '../../../public/ts.png'
import react from '../../../public/react.png'
import nextjs from '../../../public/nextjs.jpeg'
import cplus from '../../../public/c++.jpeg'
import tailwind from '../../../public/tailwindcss.png'
import github from '../../../public/github.png'
import vscode from '../../../public/vscode.png'
import FramerWrapper from "@/components/animation/FramerWrapper";

const experiencePage = () => {
    const language = [
        {name:"Python"},
        {name:"C/C++"},
        {name:"Java"},
        {name:"SQL"},
        {name:"R"},
        {name:"JavaScript"},
        {name:"TypeScript"},
        {name:"Java"},
        {name:"HTML"},
        {name:"CSS"},
        {name:"Scheme"},
        {name:"OCaml"},
    ]

    const framework = [
        {name:"React"},
        {name:"Next.js"},
        {name:"Tailwind"},
        {name:"Git/Github"},
        {name:"VSCode"},
        {name:"NumPy"},
        {name:"Matplotlib"},
        {name:"R Shiny"},
        {name:"MySQL"},
        {name:"PostgreSQL"},
        {name:"React Native"},
        {name:"LaTex"},
        {name:"Google Cloud"},
    ]
       

  return (
    // EXPERIENCES PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Lightbulb className="h-5 w-5" />
        My Experiences
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Skills</Heading>
        <FramerWrapper y={0} x={200} >
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">

          </p>
        </FramerWrapper>

        <FramerWrapper y={100} delay={0.30} className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Programming Languages
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={language} />
          </div>
        </FramerWrapper>

        <FramerWrapper  className="block" y={100} delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Framework/Libraries and Version Control
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={framework} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default experiencePage;