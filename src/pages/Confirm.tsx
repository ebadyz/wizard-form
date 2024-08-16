import { Heading, Text, Link, Center, Icon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { ROUTER_PATHS } from "src/constants/paths";

function Confirm() {
  return (
    <Center flexDirection="column" h="100vh" px={4} gap={4} textAlign="center">
      <Icon
        as={CheckCircleIcon}
        transform="rotate(10deg)"
        w="100px"
        h="100px"
        color={"green.500"}
      />
      <Heading>Confirmation</Heading>
      <Text>
        We have received your progress. We will review it and get back to you
        soon.
      </Text>
      <Link href={ROUTER_PATHS.Home}>Go to home</Link>
    </Center>
  );
}

export default Confirm;
