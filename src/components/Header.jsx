import React from "react";
import { HeaderStyled, Image, Logo, Nav } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
  return (
    <HeaderStyled>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="Logo" />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h2>Build The Community Your Fans Will Love</h2>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>

          <Image src="./images/illustration-mockups.svg" alt="Image" />
        </Flex>
      </Container>
    </HeaderStyled>
  );
}
