import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { CiLogin, CiUser } from "react-icons/ci";

export default function Relatorio  () {

  const [name, setName] = useState("")
  function handleName (event:any) {
    setName(event.target.value)
    
  }
  
  return (
    <Box bg={'#1B2C32'} h={'100vh'}>
        <Box>
          <Flex justify={'center'} h={'100vh'} margin={'0 auto'} align={'center'} flexDir={'column'} w={'25vw'}>
            <Text color={'white'} fontSize={20} fontWeight={'500'} mb={5}>Login</Text>
              <Input type="text" mb={'5'} bg={'white'} placeholder="Username" onChange={handleName}/>
              <Input type="text" mb={'5'} bg={'white'} placeholder="Password"/>
              <Link href={`/relatorios/${name}`}><Button bg={'#00A8FF'} color="white" gap={3}> <CiLogin color="white"/> Login</Button></Link>
          </Flex>
        </Box>
    </Box>
  )
}