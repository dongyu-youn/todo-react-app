import { Box, Button, Divider, HStack, Text } from "@chakra-ui/react";
import { FaComment } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <Box>
      <HStack my={8}>
        <Divider />
        <Text color="gray.200" textTransform={"uppercase"} fontSize="xs" as="b">
          Or
        </Text>
        <Divider />
      </HStack>

      <Button w="100%" leftIcon={<FaComment />} colorScheme={"yellow"}>
        Continue with KaKaotalk
      </Button>
    </Box>
  );
}
