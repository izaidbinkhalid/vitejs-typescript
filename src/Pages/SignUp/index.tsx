import * as React from "react";
import SignUp from "Components/SignUpStepper";
import { StepperProvider } from "Context/StepperContext";

export const SignUpPage: React.FC = () => {
  return (
    <StepperProvider>
      <SignUp />;
    </StepperProvider>
  );
};
