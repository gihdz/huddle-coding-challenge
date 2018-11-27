import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Header, Hero } from "./components/";
import { theme } from "./utils/";
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <main>
          <Header />
          <Hero />
        </main>
      </ThemeProvider>
    );
  }
}

export default App;
