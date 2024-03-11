import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { echo } from "@/pages/api/req";
import { useParams } from "next/navigation";
import { ContratoNovo } from "../contratoNovo";

export const Page = ({id}: any) => {
  
const [ide, setIde] = useState<any>()
const [param, setparam] = useState<any>()
const [returned, setReturnerd] = useState<any>()
const [status, setStatus] = useState<any>()
const [numAtual, setAtual] = useState(1)

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

 const nextpage = () => {
  setAtual(numAtual + 1)
 }
 const backpage = () => {
  setAtual(numAtual - 1)
 }

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
              <Text color={"#0066cc"} mt={10} fontSize={'25px'} mb={20}>{id}</Text>
              <Flex flexDir={"column"} w={'60%'} >
                <Button
                  border={"0"}
                  bg="#5D9AF5"
                  p={10}
                  h={"40px"}
                  w={'auto'}
                  mb={10}
                  cursor={"pointer"}
                  borderRadius={13}
                  _hover={{background: "blue.500"}}
                >
                  {returned}
                </Button>
                {param !== " " &&  
                <Button
                  border={"0"}
                  bg="#5D9AF5"
                  p={10}
                  h={"40px"}
                  borderRadius={13}
                  cursor={"pointer"}
                  _hover={{background: "blue.500"}}
                  
                >
                  {param}
                </Button>
                }
              </Flex>
            </Flex>
          </Box>
        </Box>
        <Flex bg={'#E7E7E7'} w={'50vw'} h={'100vh'} justify={'center'} border={'1px solid #cccc'} borderRadius={14} boxShadow={'0 0 3px #1b1b1bcc'}>
          <Flex flexDir={'column'} justify={'center'} align={'center'} >
            <Text color={'green'} mb={20} >Proposta Recebida</Text>
              <ContratoNovo/>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};