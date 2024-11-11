import { Button, ChakraProvider, Box, Flex, Select, Textarea, Text, Heading, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <Flex
        direction="column"
        align="center"
        // minH="100vh"
        p={0} // Remove padding to prevent overflow
        gap={8}
        fontFamily="var(--font-geist-sans)"
      >
        <Flex flexDirection="column" align="center" gap={8} w="full" >
          <Box  p={8}> {/* Use Box for flexibility */}
            <Flex justify="center" flexDirection="column" alignItems="center">
            <Image src="/images/cloudmantra.png" alt="Logo" boxSize="150px" mb={4} />
              <Heading size="lg">Welcome to Content Generator - Demo</Heading>
            </Flex>
            <br />
            <Select placeholder="Select Language">
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="marathi">Marathi</option>
            </Select>
            <br />
            <Select placeholder="Select the type of content generation">
              <option value="translate">Enter English content to Translate to Marathi</option>
              <option value="generate_marathi">Please provide Marathi information for Marathi content generation</option>
              <option value="seo_keywords">Please provide Marathi information for SEO keywords generation</option>
              <option value="review_marathi">Please provide Marathi text for review</option>
            </Select>
            <br />
            <Textarea placeholder="Enter your text here" />
            <Flex justify="flex-end">
              <Text fontSize="sm">Please enter a minimum of 50 characters for review.</Text>
            </Flex>
            <br />
            <Button colorScheme="blue">Review</Button>
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
