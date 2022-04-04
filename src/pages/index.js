import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Hero from "../components/Hero/Hero";
import BgAnimation from "../components/BackgroundAnimation/BgAnimation";
import Projects from "../components/Projects/Project";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";

function Home() {
  return (
    <Layout>
      <Section grid />
      <Hero />
      <BgAnimation />
      <Section />
      <Projects />
      <Technologies />
      <Timeline />
    </Layout>
  );
}

export default Home;
