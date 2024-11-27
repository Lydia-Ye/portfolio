import logo from "../../public/ziye_profile_cartoon.png";
import Image from "next/image"

const HeroImage = ()  => {
    return(
        <>
          <Image
          src={logo}
          alt="logo"
          loading="eager"
          priority
          height={900}
          width={900}
        />
        </>
    )
}
export default HeroImage