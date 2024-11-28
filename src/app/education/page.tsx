import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden pt-32">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col gap-8"> 
        <div className="flex flex-col lg:flex-row w-full gap-4">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-full lg:w-1/4 font-rubik flex justify-evenly text-lg max-sm:text-base pt-[2.5%]">
            August 2022 - May 2026
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-full lg:w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Bachelor of Arts in Computer Science, <br /> Grinnell College, IA, United States
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              I am currently a junior at Grinnell College, majoring in Computer Science and (intended) Mathematics.
            </p>
            <br />
            <div className="text-xl font-rubik max-sm:text-xl">
              Coursework
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              Analysis of Algorithms, Object-Oriented Problem Solving (Java), Data Structures, Imperative Problem Solving (C), Functional Problem Solving (Scheme), Operating System, Program Synthesis, Website Design, Real Analysis, Number Theory, Probability and Statistics, Linear Algebra
            </p>
          </FramerWrapper>
        </div>
        <br />
        <div className="flex flex-col lg:flex-row w-full gap-4">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-full lg:w-1/4 font-rubik flex justify-evenly text-lg max-sm:text-base pt-[2.5%]">
            August 2019 - May 2022
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-full lg:w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point">
            <div className="text-2xl font-rubik max-sm:text-xl">
              International Baccalaureate (IB) Diploma Programme (DP) <br /> Beijing Huijia Private School, Beijing, China
            </div>
            <br />
            <div className="text-xl font-rubik max-sm:text-xl">
              Coursework
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              HL: Math AA, Psychology, English B <br/>
              SL: CHinese A, Physics, Biology
            </p>
          </FramerWrapper>
          <br />
        </div>
      </div>
    </div>
  );
};

export default educationPage;
