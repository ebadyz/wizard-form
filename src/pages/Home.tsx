import { Heading, Button, Center } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATHS } from "src/constants/paths";

function Welcome() {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate(ROUTER_PATHS.signup);
  };

  return (
    <Center flexDirection="column" h="100vh" gap={10}>
      <Heading textAlign="center" textTransform="uppercase">
        Welcome to Our Service
      </Heading>
      <Button rightIcon={<ArrowForwardIcon />} onClick={goToSignUp}>
        Get Started
      </Button>
    </Center>
  );
}

export default Welcome;
