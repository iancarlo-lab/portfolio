import { Layout } from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import { Section } from "../styles/GlobalComponents";
import BgAnimation from "../components/BackgroundAnimation/BgAnimation";

function Home() {
  return (
    <Layout>
      <Section grid />
      <Hero />
      <BgAnimation />
      <Section />
    </Layout>
  );
}

export default Home;
