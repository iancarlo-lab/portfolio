import { Layout } from "../layout/Layout";
import Hero from "../components/Hero/Hero";
console.log(Layout);
function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

export default Home;
