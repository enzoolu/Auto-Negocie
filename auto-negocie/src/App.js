import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/theme"; 
import GlobalStyle from './components/globalStyles.js';
import { HeroSection } from "./components/heroSection.js";
import { Section1 } from "./components/section1.js";
import { Section2 } from "./components/section2.js";
import { Section3 } from "./components/section3.js";
import { Section4 } from "./components/section4.js";
import Form from "./components/form.js";
import { Footer } from "./components/footer.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Form />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
