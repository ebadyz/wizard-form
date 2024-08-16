import { useWizard } from "react-use-wizard";
import { HStack } from "@chakra-ui/react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "src/components/Input";
import {
  zodEnglishLetter,
  zodEmail,
  zodPhoneNumber,
} from "src/constants/validations";
import Step from "src/components/step/Step";
import { useStepsStore } from "src/stores/steps";

const basicInfoSchema = z.object({
  firstName: zodEnglishLetter("first Name"),
  lastName: zodEnglishLetter("last name"),
  email: zodEmail("email"),
  phoneNumber: zodPhoneNumber("phone number"),
  company: zodEnglishLetter("company"),
});

export type BasicInfo = z.infer<typeof basicInfoSchema>;

function PersonalInfo() {
  const defaultValues = useStepsStore((state) => state.basicInfo);
  const updatePersonalInfo = useStepsStore((state) =>
    state.updateSteps("basicInfo")
  );
  const { nextStep } = useWizard();
  const methods = useForm<BasicInfo>({
    mode: "onBlur",
    resolver: zodResolver(basicInfoSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<BasicInfo> = (data) => {
    updatePersonalInfo(data);
    nextStep();
  };

  return (
    <FormProvider {...methods}>
      <form id="stepForm" onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <Step
          title="contact details"
          subtitle="Please provide your personal information"
        >
          <HStack alignItems="flex-end">
            <Input<BasicInfo>
              label="Name"
              name="firstName"
              placeholder="First"
            />
            <Input<BasicInfo>
              name="lastName"
              placeholder="Last"
              justifyContent="center"
            />
          </HStack>
          <Input<BasicInfo>
            label="Email"
            name="email"
            placeholder="example@gmail.com"
          />
          <Input<BasicInfo>
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            placeholder="+989046695546"
          />
          <Input<BasicInfo>
            label="Company"
            name="company"
            placeholder="Company name"
          />
        </Step>
      </form>
    </FormProvider>
  );
}

export default PersonalInfo;
