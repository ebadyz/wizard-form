import { useWizard } from "react-use-wizard";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useStepsStore } from "src/stores/steps";
import Step from "src/components/step/Step";
import ListSelect from "src/components/ListSelect";
import { PLANS_OPTIONS } from "src/constants/statics";
import { zodSelectRequired } from "src/constants/validations";
import { zodResolver } from "@hookform/resolvers/zod";

const plansSchema = z.object({
  plan: zodSelectRequired("plan"),
});

export type Plan = z.infer<typeof plansSchema>;

function Plans() {
  const defaultValues = useStepsStore((state) => state.plan);
  const updatePlan = useStepsStore((state) => state.updateSteps("plan"));
  const { nextStep } = useWizard();
  const methods = useForm<Plan>({
    defaultValues,
    resolver: zodResolver(plansSchema),
  });
  const onSubmit: SubmitHandler<Plan> = (data) => {
    updatePlan(data);
    nextStep();
  };

  return (
    <FormProvider {...methods}>
      <form id="stepForm" onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <Step
          title="Choose a Serivce"
          subtitle="Select the service you are interested in"
        >
          <ListSelect<Plan> name="plan" items={PLANS_OPTIONS} w="100%" p={12} />
        </Step>
      </form>
    </FormProvider>
  );
}

export default Plans;
