import { Hero } from "../sections/Hero";
import { Main } from "../sections/Main";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};
const mainProps = {
  image: { src: "/img/video.png", alt: "", width: 1000, height: 1680 },
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
  cardOne: {
    image: { src: "/img/C1.png", alt: "", width: 100, height: 100 },
    title: "Brief",
    description:"Complete brief writing and or simple guidance on what to include, we've got you coverted.",
  },
  cardTwo: {
    image: { src: "/img/C2.png", alt: "", width: 100, height: 100 },
    title: "Search",
    description:"In-depth agency search covering;criteria matching, door knocking and due dilligence vetting.",
  },
  cardThree: {
    image: { src: "/img/C3.png", alt: "", width: 100, height: 100 },
    title: "Pitch",
    description:"Comprehensive pitch management, including comms, diary management and pitch hosting.",
  },
};
export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        <Main {...mainProps} />
      </div>
    </>
  );
}
