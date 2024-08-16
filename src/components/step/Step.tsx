import { ReactNode } from "react";
import { Center, Container, VStack } from "@chakra-ui/react";
import StepHeader, { type StepHeaderProps } from "./StepHeader";
import StepFooter from "./StepFooter";

type StepProps = StepHeaderProps & {
  children: ReactNode;
};

function Step({ title, subtitle, children }: StepProps) {
  return (
    <Container>
      <VStack position="relative" h="100vh">
        <StepHeader title={title} subtitle={subtitle} />
        <Center flexDirection="column" flex={1} p={4} gap={6} w="100%">
          {children}
        </Center>
        <StepFooter />
      </VStack>
    </Container>
  );
}

export default Step;
