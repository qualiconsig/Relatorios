import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { echo } from "@/pages/api/req";
import { useParams } from "next/navigation";

export const Page = ({id}: any) => {
  
const [ide, setIde] = useState<any>()
const [param, setparam] = useState<any>()
const [returned, setReturnerd] = useState<any>()
const [status, setStatus] = useState<any>()

function verifyParam () {
  setIde(id)
  if(id === "Contrato novo") {
    setReturnerd('Gerar Proposta')
    setparam("Buscar tarifa")
  } 
  if(id === "Portabilidade") {
    setReturnerd('Gerar Proposta')
    setparam(" Buscar Tarifa convenio parcelas")
  }
  if(id === "Portal vendas") {
    setReturnerd('Buscar status proposta' )
    setparam('buscar status ctc')
  }
  if(id === "Proposta") {
    setReturnerd('Consulta fila')
    setparam(" ")
  }
}

const pingecho = async () => {
  const ping = await echo
  console.log(ping.message)
  if(ping.message === 'Is alive!') {
    setStatus('Online')
  } else {
    setStatus('offline')
  }
}

 useEffect(() => {
  verifyParam()
  pingecho()
 },[id])

  return (
    <Box h={"100vh"} bg="#ECECEC">
      <Box w={"95vw"} margin={"0 auto"} display={'flex'} justifyContent={'space-between'}>
        <Box w={"30%"} justifyContent={'center'} h={'50vh'} >
          <Box> 
            <Flex align={"flex-end"} fontSize={"20px"} height={"75px"}>
              {status === 'Online' &&
              <Text color={"green"}>Status: {status}</Text>
              } {status === 'offline' && 
              <Text color={"red"}>Status: {status}</Text>
              }
            </Flex>
            <Flex h={"44vh"} alignItems={"center"} flexDir={'column'} justify={'center'} align={'center'} >
              <Text color={"#0066cc"} fontSize={'25px'} mb={20}>{id}</Text>
              <Flex flexDir={"column"} w={'60%'} >
                <Button
                  border={"0"}
                  bg="#5D9AF5"
                  p={20}
                  h={"40px"}
                  w={'auto'}
                  mb={20}
                  cursor={"pointer"}
                  borderRadius={13}
                >
                  {returned}
                </Button>
                {param !== " " &&  
                <Button
                  border={"0"}
                  bg="#5D9AF5"
                  p={20}
                  h={"40px"}
                  borderRadius={13}
                  cursor={"pointer"}
                  
                >
                  {param}
                </Button>
                }
              </Flex>
            </Flex>
          </Box>
        </Box>
        <Flex bg={'#E7E7E7'} w={'50vw'} justify={'center'} border={'1px solid #cccc'} borderRadius={14} boxShadow={'0 0 3px #1b1b1bcc'}>
          <Flex flexDir={'column'} justify={'center'} align={'center'}  >
            <Text color={'green'} mb={20} >Proposta Recebida</Text>
            <Text>Id Transaction: 9166440c-5132-4db7-952d-5c9298423336</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
