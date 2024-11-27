import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            August 2022 - May 2026
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Bachelor of Arts in Computer Science, <br /> Grinnell College
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
                I am currently a junior at Grinnell College, major in Computer Science and (intended) Mathematics. 
            </p>
            <br />

            <div className="text-xl font-rubik max-sm:text-xl">
              Coursework
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
                Analysis of Algorithms, Object-Oriented Problem Solving (Java), Data Structures, Imperative Problem Solving (C), Functional Problem Solving (Scheme) , Operating System, Program Synthesis, Website Design, Real Analysis, Number Theory, Probability and Statistics, Linear Algebra
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
