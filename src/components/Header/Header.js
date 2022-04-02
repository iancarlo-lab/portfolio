import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyle";

const Header = () => {
  <Container>
    <Div1>
      <Link href="/">
        <a>
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href={"#projects"} passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href={"#techn"} passHref>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href={"#about"} passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size={"3rem"} />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillGithub size={"3rem"} />
      </SocialIcons>
      <SocialIcons href="https://instagram.com">
        <AiFillGithub size={"3rem"} />
      </SocialIcons>
    </Div3>
  </Container>;
};

export default Header;
