import { useNavigate } from "react-router-dom";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useStepsStore } from "src/stores/steps";
import Step from "src/components/step/Step";
import ListSelect from "src/components/ListSelect";
import { BUDGET_OPTIONS } from "src/constants/statics";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodSelectRequired } from "src/constants/validations";
import { ROUTER_PATHS } from "src/constants/paths";

const budgetSchema = z.object({
  budget: zodSelectRequired("budget"),
});

export type Budget = z.infer<typeof budgetSchema>;

function Budget() {
  const navigate = useNavigate();
  const defaultValues = useStepsStore((state) => state.budget);
  const updatePlan = useStepsStore((state) => state.updateSteps("budget"));

  const methods = useForm<Budget>({
    defaultValues,
    resolver: zodResolver(budgetSchema),
  });
  const onSubmit: SubmitHandler<Budget> = (data) => {
    updatePlan(data);
    navigate(ROUTER_PATHS.confirm);
  };

  return (
    <FormProvider {...methods}>
      <form id="stepForm" onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <Step
          title="What's your budget?"
          subtitle="Select the project budget range you have in mind"
        >
          <ListSelect<Budget>
            w="100%"
            p={12}
            name="budget"
            items={BUDGET_OPTIONS}
          />
        </Step>
      </form>
    </FormProvider>
  );
}

export default Budget;
