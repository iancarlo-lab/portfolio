import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyle";

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Adrian Murillo <br />
        Mechatronics Engineer | Full Stack Developer | Robotics
      </SectionTitle>
      <SectionText>
        +10 years experience in Tech companies | OEM | IT | Robotics
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
