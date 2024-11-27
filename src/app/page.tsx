import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import FramerWrapper from "@/components/animation/FramerWrapper";

export const siteConfig = {
  name: "Zi(Lydia) Ye",
  description: "I am a junior Computer Science and Mathematics Student at Grinnell College.",
}
export default function Home() {
  return (
   <>
      {/* LEFT SIDE  */}
      <FramerWrapper className=" h-full w-auto flex flex-col justify-start gap-4" y={0} x={-100}>
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-3">
          <SocialLinks />
        </div>
      </FramerWrapper>
      {/* RIGHT SIDE image  */}
      <FramerWrapper className="h-full w-[47%] relative block   max-lg:hidden" y={0} x={100}>
       
      {/* IMAGE  */}
        <HeroImage />
      </FramerWrapper>
      </>
  );
}
