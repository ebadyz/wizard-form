import { Component, ReactNode, ErrorInfo } from "react";
import { Center, VStack, Heading, Text, Button } from "@chakra-ui/react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Center h="100vh">
          <VStack spacing={4}>
            <Heading>Oops, something went wrong</Heading>
            <Text>
              We're sorry for the inconvenience. Please try again later.
            </Text>
            <Button
              colorScheme="purple"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </Button>
          </VStack>
        </Center>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
