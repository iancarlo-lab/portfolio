import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Hero from "../components/Hero/Hero";
import BgAnimation from "../components/BackgroundAnimation/BgAnimation";
import Projects from "../components/Projects/Project";
import Technologies from "../components/Technologies/Technologies";

function Home() {
  return (
    <Layout>
      <Section grid />
      <Hero />
      <BgAnimation />
      <Section />
      <Projects />
      <Technologies />
    </Layout>
  );
}

export default Home;
