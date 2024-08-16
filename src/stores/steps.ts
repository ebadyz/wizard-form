import { create } from "zustand";

import { over, lensPath } from "ramda";
import type { BasicInfo } from "src/components/steps/BasicInfo";
import type { Plan } from "src/components/steps/Plan";
import type { Budget } from "src/components/steps/Budget";

type StepsState = Partial<{
  basicInfo: BasicInfo;
  plan: Plan;
  budget: Budget;
}>;

type StepsValue = BasicInfo | Plan | Budget;

type StepsActions = {
  updateSteps: (name: keyof StepsState) => (value: StepsValue) => void;
};

export const useStepsStore = create<StepsState & StepsActions>()((set) => ({
  updateSteps: (name) => (value) => set(over(lensPath([name]), () => value)),
}));
