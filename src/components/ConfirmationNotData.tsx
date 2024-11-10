import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const ConfirmationNotData = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Text my={4}>No hay información de formulario disponile</Text>
      <Button onClick={() => navigate("/")} colorScheme="blue">
        Volver al formulario
      </Button>
    </Box>
  );
};
