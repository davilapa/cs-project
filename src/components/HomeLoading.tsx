import { Flex, Spinner } from "@chakra-ui/react";

export const HomeLoading = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      width="100%"
      maxWidth="500px"
      p={4}
    >
      <Spinner></Spinner>
    </Flex>
  );
};
