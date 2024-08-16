import { Center, VStack, Heading, Text, Button } from "@chakra-ui/react";

function Fallback() {
  return (
    <Center h="100vh">
      <VStack spacing={4}>
        <Heading>Oops, something went wrong!</Heading>
        <Text>We're sorry for the inconvenience. Please try again later.</Text>
        <Button colorScheme="purple" onClick={() => window.location.reload()}>
          Refresh Page
        </Button>
      </VStack>
    </Center>
  );
}

export default Fallback;
