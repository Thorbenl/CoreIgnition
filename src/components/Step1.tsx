import React, { useState, ReactPropTypes } from "react";
import {
  Card,
  Icon,
  Image,
  Container,
  Segment,
  Grid,
  Divider,
  Header,
  Search,
  Button
} from "semantic-ui-react";

export interface NextStepProps {
  onStepChange: (value: number | undefined) => void;
}

const Step1: React.FunctionComponent<NextStepProps> = ({ onStepChange }) => {
  const handleNextStep = () => onStepChange(2);

  return (
    <Container>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="cog" />
                Repair Phone/Computer
              </Header>
              <Button onClick={handleNextStep} primary>
                Select
              </Button>
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name="world" />
                Build a Computer
              </Header>
              <Button onClick={handleNextStep} primary>
                Select
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export { Step1 };
