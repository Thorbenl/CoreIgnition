import React, { useState } from "react";
import { Step1 } from "./Step1";
import { Container } from "semantic-ui-react";

export interface Form {
  firstName: string;
  lastName: string;
}

const MainForm = () => {
  const [step, setStep] = useState<number>(1);
  const handleStepChange = value => {
    setStep(value);
  };

  switch (step) {
    case 1:
      return <Step1 onStepChange={handleStepChange} />;
    case 2:
      return <div>STEP 2</div>;
    case 3:
      return <div>3</div>;
    case 4:
      return <div>4</div>;
  }
  return <Container>Hello</Container>;
};

export { MainForm };
