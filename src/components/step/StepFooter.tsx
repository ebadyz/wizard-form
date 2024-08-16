import { Button, HStack } from "@chakra-ui/react";
import { useWizard } from "react-use-wizard";

function StepFooter() {
  const { previousStep, isFirstStep } = useWizard();

  return (
    <HStack
      justifyContent={!isFirstStep ? "space-between" : "flex-end"}
      w="100%"
      py={8}
    >
      {!isFirstStep && (
        <Button type="button" w="100px" onClick={previousStep}>
          Previous
        </Button>
      )}
      <Button type="submit" form="stepForm" w="100px">
        Next
      </Button>
    </HStack>
  );
}

export default StepFooter;
