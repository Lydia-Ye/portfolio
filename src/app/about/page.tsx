import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
const page = () => {
  const items = [
    { hobby: "Coding" },
    { hobby: "Dancing" },
    { hobby: "Film photography" },
    { hobby: "Creating cool projects" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-y-auto pt-32">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
       
          <Heading>
            Undergraduate CS and Math student
          </Heading>
   
        <FramerWrapper y={0} x={100} >
          <p className=" font-poppins text-l w-full text-primary max-sm:text-lg">
            I am a junior Computer Science and Mathematics student at Grinnell College with a solid academic background and hands-on experience in software development. I have built and contributed to a variety of projects, ranging from developing mobile and web applications to implementing program synthesis tools. I am confident at designing and developing robust, user-focused full-stack software, and passionate about applying my problem-solving skills and technical knowledge to real-world challenges in software engineering.
          </p>
        </FramerWrapper>
      </div>

      <br />
      <FramerWrapper className="w-full flex flex-row justify-between max-lg:flex-col " y={100} delay={0.30}>
        <Aboutfooter />
      </FramerWrapper>

      <br />
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
