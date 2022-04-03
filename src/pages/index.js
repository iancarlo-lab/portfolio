import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Hero from "../components/Hero/Hero";
import BgAnimation from "../components/BackgroundAnimation/BgAnimation";
import Projects from "../components/Projects/Project";

function Home() {
  return (
    <Layout>
      <Section grid />
      <Hero />
      <BgAnimation />
      <Section />
      <Projects />
    </Layout>
  );
}

export default Home;
