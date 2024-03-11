import { Box, Flex, List, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { ListItemCom } from "./list";
import { useEffect, useState } from "react";

export const FilterDatas = ({selectedMonth}: any) => {
  
  const [selected, setSelected] = useState("Janeiro")
  useEffect(() => {
    setSelected(selectedMonth)
  },[])
  
  return (
    <Box>
      <Flex
        h={"80vh"}
        align={"center"}
        justify={"center"}
        w={"50vw"}
        margin={"0 auto"}
      >
        <Flex bg={"#F4F4F4"}   borderRadius={14}>
          <Flex 
            h={{base:"100vh", md:"70vh", lg:"50vh"}}
            justify={"space-around"}
            w={{base:"100vw", md:"70vw", lg:"60vw"}}
            pr={{base:"0px",md:"20px"}}
            color={"black"}
            align={'center'}
          >
            <Box>
              
                <ListItemCom value={"Data"}  rest={"green"} secondValue={selectedMonth}/>
                <ListItemCom value={"Logados"} secondValue={"176"}/>
                <ListItemCom value={"Vendas Totais"} secondValue={"199.585.900"}/>
                <ListItemCom value={"Enviados Cip"} secondValue={"79.530.200"}/>
                <ListItemCom value={"%Cip"} secondValue={"55%"}/>
             
            </Box>
            

            <Box ml={20}>
            
                <ListItemCom value={"Cip Paga"} secondValue={"48.143.105"}/>
                <ListItemCom value={"Integrado"} secondValue={"55.650.100"}/>
                <ListItemCom value={"Por consultor"} secondValue={"310.541"}/>
                <ListItemCom value={"%Efetivado Cip"} secondValue={"58%"}/>
                <ListItemCom value={"Efetivado Total"} secondValue={"33%"}/>
          
            </Box>
        
          </Flex>
          <Flex>

          </Flex>
        </Flex>
       
      </Flex>
    </Box>
  );
};
