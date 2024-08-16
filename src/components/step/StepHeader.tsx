import { Box, Heading, Progress, VStack } from "@chakra-ui/react";
import { useWizard } from "react-use-wizard";

export type StepHeaderProps = {
  title: string;
  subtitle?: string;
};

function StepHeader({ title, subtitle }: StepHeaderProps) {
  const { stepCount, activeStep } = useWizard();

  const progress = (activeStep + 0.5) * (100 / stepCount);

  return (
    <VStack as="header" w="100%" pt={8} gap={10}>
      <Progress
        size="sm"
        w="inherit"
        value={progress}
        borderRadius={4}
        colorScheme="purple"
      />
      <Box w="100%" textAlign="center">
        <Heading textTransform="uppercase">{title}</Heading>
        {subtitle && (
          <Heading color="gray.400" size="xs" mt={2}>
            {subtitle}
          </Heading>
        )}
      </Box>
    </VStack>
  );
}

export default StepHeader;
