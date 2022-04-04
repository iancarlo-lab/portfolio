import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyle";
import { Milestones } from "../../constants/constants";

const Acomplishments = () => (
  <Section>
    <SectionTitle>Milestones</SectionTitle>
    <Boxes>
      {Milestones.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number} +</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
