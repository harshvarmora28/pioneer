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


import LoginCompany from "./login/LoginCompany";
import LoginPlacement from "./login/LoginPlacement";

const Login = () => {
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
            <Tab>Login as Company</Tab>
            <Tab>Login as Placement Cell</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LoginCompany />
            </TabPanel>
            <TabPanel>
              <LoginPlacement />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Login;