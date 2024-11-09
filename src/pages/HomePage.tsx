import { Box, VStack, Heading, Spinner, Flex } from "@chakra-ui/react";
import DynamicForm from "../components/DynamicForm";
import { useFormConfig } from "../hooks/useFormConfig";

export default function HomePage() {
  const { formConfig } = useFormConfig();

  if (!formConfig) {
    return (
      <Flex
        flexDirection="column"
        alignItems="center"
        width="100%"
        maxWidth="500px"
        p={4}
      >
        <Spinner></Spinner>
        Loading...
      </Flex>
    );
  }

  return (
    <Box width="100%" maxWidth="500px" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Formulario Dinámico
        </Heading>
        <DynamicForm components={formConfig} />
      </VStack>
    </Box>
  );
}
