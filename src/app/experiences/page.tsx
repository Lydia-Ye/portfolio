import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFooter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
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
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-auto pt-32">
      <Badge className="gap-2">
        <Lightbulb className="h-5 w-5" />
        Experiences and Skills
      </Badge>
      <div className="flex flex-col gap-3 pt-8">
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
            Framework/Libraries
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={framework} />
          </div>
        </FramerWrapper>
      </div>

      <div className="flex flex-col gap-3 pt-8">
        <Heading>My Technical Experiences</Heading>

        <FramerWrapper y={100} delay={0.30} className="block pb-4">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl pt-2">
            Educational Web App Developer
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <p>
              Advisor: Dr. Kuiper Shonda | May 2024 - Present
            </p>
          </div>
        </FramerWrapper>

        <FramerWrapper y={100} delay={0.30} className="block pb-4">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl pt-2">
            Program Synthesis Research Assistant
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <p>
              Advisor: Dr. Peter-Michael Osera | August 2024 - Present
            </p>
          </div>
        </FramerWrapper>

        <FramerWrapper y={100} delay={0.30} className="block pb-4">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl pt-2">
            Undergraduate Teaching Assistant for Introductory Computer Science Courses            
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <p>
              Grinnell College Computer Science Department | August 2023 - May 2024
            </p>
          </div>
        </FramerWrapper>

        <FramerWrapper y={100} delay={0.30} className="block pb-4">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl pt-2">
            AI and 3D Modelling Research Assistant            
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <p>
              ELBICA Lab | Advisor: Dr. Eliott Fernanda | May 2023 - October 2023
            </p>
          </div>
        </FramerWrapper>
      </div>

      <div className="flex flex-col gap-3 pt-8">
        <Heading>Other Experiences</Heading>

        <FramerWrapper y={100} delay={0.30} className="block pb-4">
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl pt-2">
              Girls Who Code Facilitator            
            </h1>
            <div className="w-full h-fit flex-row flex justify-between items-center">
              <p>
                Grinnell Middle School & Grinnell College Girls Who Code Club | January 2024 - Present
              </p>
            </div>
        </FramerWrapper>

        <FramerWrapper y={100} delay={0.30} className="block pb-4">
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl pt-2">
              President of Chinese Student Association   
            </h1>
            <div className="w-full h-fit flex-row flex justify-between items-center">
              <p>
                Grinnell College | March 2023 - March 2024
              </p>
            </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default experiencePage;
