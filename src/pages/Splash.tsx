import { Center, VStack, Heading, Text, Spinner } from "@chakra-ui/react";

function Splash() {
  return (
    <Center h="100vh" bg="purple.500">
      <VStack spacing={6}>
        <Spinner size="xl" color="white" thickness="4px" />
        <Heading color="white" size="2xl">
          Welcome
        </Heading>
        <Text color="white" fontSize="xl">
          Loading the app...
        </Text>
      </VStack>
    </Center>
  );
}

export default Splash;
