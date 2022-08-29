import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import { content } from "./utils/content";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },

  mobile: "768px",
  sm: "452px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />

      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
