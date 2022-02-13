import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import SignupCompany from "../authentication/signup/SignupCompany";
import SignupPlacement from "../authentication/signup/SignupPlacement";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Welcome to Hiring-Cell !
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Register as Company</Tab>
            <Tab>Register as Placement Cell</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SignupCompany />
            </TabPanel>
            <TabPanel>
              <SignupPlacement />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
