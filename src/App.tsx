import "./App.css";

import { ChakraProvider, Box, VStack } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ConfirmationPage from "./pages/ConfirmationPage";

export default function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" bg="beige.50" width='100%'>
        <VStack spacing={8} py={10}>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
            </Routes>
          </Router>
        </VStack>
      </Box>
    </ChakraProvider>
  )
}