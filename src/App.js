import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./components/Header";
import { theme } from "./utils/";
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <main>
          <Header />
        </main>
      </ThemeProvider>
    );
  }
}

export default App;
