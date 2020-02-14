import React from "react";
import Button, { ButtonGroup } from "@atlaskit/button";
import EmptyState from "@atlaskit/empty-state";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { MainForm } from "./components/MainForm";
import { Container, Header } from "semantic-ui-react";

const props = {
  header: "Welcome!",
  description: `Hello! I am Thorben and I love Tech. Let me help you guide through this!`
};

const App = () => {
  return (
    <div className="App">
      <Container>
        <Header as="h2">What would you like me to do?</Header>
        <MainForm />
      </Container>
    </div>
  );
};

export default App;
