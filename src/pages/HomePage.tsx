import { Box, VStack, Heading } from "@chakra-ui/react";
import DynamicForm from "../components/DynamicForm";
import { useFormConfig } from "../hooks/useFormConfig";
import { HomeLoading } from "../components/HomeLoading";

export default function HomePage() {
  const { formConfig, isLoading } = useFormConfig();

  return (
    <Box width="100%" maxWidth="500px" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Formulario Dinámico
        </Heading>
        {isLoading ? <HomeLoading /> : <DynamicForm components={formConfig} />}
      </VStack>
    </Box>
  );
}
