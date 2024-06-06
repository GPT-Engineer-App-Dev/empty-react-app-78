import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text fontSize="xl" fontWeight="bold">MyApp</Text>
            <Flex>
              <Link as={RouterLink} to="/" mx={2}>Home</Link>
              <Link as={RouterLink} to="/about" mx={2}>About</Link>
              <Link as={RouterLink} to="/contact" mx={2}>Contact</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.lg" py={10}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a simple, responsive React app using Chakra UI.</Text>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.900" color="white" py={4} mt="auto">
        <Container maxW="container.lg">
          <Text textAlign="center">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;