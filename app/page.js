import Hero from "./Cx/Hero";
import Impact from "./Cx/Impact";
import Results from "./Cx/Results";
import Solutions from "./Cx/Solutions";
import Tech from "./Cx/Tech";
import SustainabilityImage from "./Cx/SustainabilityImage";
import CTA from "./Cx/CTA";
import Footer from "./layout/Footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <Results/>
      <div id="tech">
        <Tech/>
      </div>
      <div id="solutions">
        <Solutions/>
      </div>
      <div id="impact">
        <Impact/>
      </div>
      <SustainabilityImage/>
      <div id="cta">
        <CTA/>
      </div>
    </>
  );
}
