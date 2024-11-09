import { Box, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  if (!formData) {
    return <Box>No hay información de formulario disponile</Box>;
  }

  return (
    <Box width="100%" maxWidth="500px" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Confirmación
        </Heading>
        <Text>Su información ha sido guardada exitosamente.</Text>
        <VStack align="stretch" spacing={2}>
          {Object.entries(formData).map(([key, value]) => (
            <Text key={key}>
              <strong>{key}:</strong> {value.toString()}
            </Text>
          ))}
        </VStack>
        <Button onClick={() => navigate("/")} colorScheme="blue">
          Volver al formulario
        </Button>
      </VStack>
    </Box>
  );
}
