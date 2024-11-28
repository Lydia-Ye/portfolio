import { cn } from "@/lib/utils";
import { Linkedin, Github, Instagram, Mail } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Email", link: "mailto:ziyelydia@gmail.com", icon: <Mail /> },
    { name: "Github", link: "https://github.com/Lydia-Ye", icon: <Github /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/zi-ye-lydia/", icon: <Linkedin /> },
    { name: "Instagram", link: "https://www.instagram.com/yzi_lydia/profilecard/?igsh=MXJkd2k1a2tkMjQ4aQ==", icon: <Instagram /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link  target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
