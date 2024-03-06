"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";

import { echo } from "@/pages/api/req";
import axios from "axios";

export default function Login () {
  const [password, setPassword] = useState("");
  const [scope, setScope] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmitLogin = async (event: any) => {
    event.preventDefault();
    console.log(username, password, scope);
  };
  return (
    <Box
      border={"1px solid gray"}
      height={445}
      w={"600px"}
      display={"flex"}
      alignContent={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={28}
      margin={"0 auto"}
    >
      <Flex flexDirection="column" alignItems="flex-start" p={4}>
        <Text fontWeight={"bold"} mb={4} fontSize={24}>
          Auth
        </Text>
        <form onSubmit={handleSubmitLogin}>
          <Flex justifyContent="space-between">
            <Box flex="1" mr={20}>
              <FormControl>
                <Input
                  id="username"
                  placeholder="Username"
                  border={"1px solid gray"}
                  p={7}
                  borderRadius={14}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
            </Box>
            <Box flex="1" ml={2}>
              <FormControl>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  border={"1px solid gray"}
                  p={7}
                  borderRadius={14}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </Box>
          </Flex>
          <FormControl mt={23}>
            <Input
              id="Scope"
              placeholder="Scope"
              w={"100%"}
              border={"1px solid gray"}
              p={7}
              borderRadius={14}
              onChange={(e) => setScope(e.target.value)}
            />
          </FormControl>
          <Button
            cursor={"pointer"}
            border={0}
            p="10"
            bg={"#18A0FB"}
            w={139}
            mt={40}
            color={"white"}
            marginRight={300}
          >
            Login
          </Button>
        </form>
      </Flex>
    </Box>
  );
};