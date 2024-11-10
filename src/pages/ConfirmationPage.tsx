import { Box, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ConfirmationNotData } from "../components/ConfirmationNotData";
import { useConfirmDataStore } from "../store/useConfirmDataStore";

export default function ConfirmationPage() {
  const navigate = useNavigate();
  const confirmData = useConfirmDataStore((state ) => state.confirmData);


  if (!confirmData) {
    return<ConfirmationNotData />;
  }

  return (
    <Box width="100%" maxWidth="500px" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Confirmación
        </Heading>
        <Text>Su información ha sido guardada exitosamente.</Text>
        <VStack align="stretch" spacing={2}>
          {Object.entries(confirmData).map(([key, value]) => (
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
