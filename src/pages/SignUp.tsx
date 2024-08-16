import { lazy } from "react";
import { Wizard } from "react-use-wizard";

const BasicInfo = lazy(() => import("src/components/steps/BasicInfo"));
const Plans = lazy(() => import("src/components/steps/Plan"));
const Budget = lazy(() => import("src/components/steps/Budget"));

function SignUp() {
  return (
    <Wizard>
      <BasicInfo />
      <Plans />
      <Budget />
    </Wizard>
  );
}

export default SignUp;
