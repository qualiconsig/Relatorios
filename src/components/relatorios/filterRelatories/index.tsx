import { Box, Flex, List, ListItem, UnorderedList } from "@chakra-ui/react";
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
        <Flex bg={"#F4F4F4"} borderRadius={14}>
          <Flex 
            h={"50vh"}
            justify={"space-around"}
            w={"60vw"}
            pr={"20px"}
            color={"black"}
            align={'center'}
          >
            <Box>
              <UnorderedList listStyleType={"none"} >
                <ListItemCom value={"Data"}/>
                <ListItemCom value={"Logados"}/>
                <ListItemCom value={"Vendas Totais"}/>
                <ListItemCom value={"Enviados Cip"}/>
                <ListItemCom value={"%Cip"}/>
              </UnorderedList>
            </Box>
            <Box>
              <UnorderedList listStyleType={"none"}>
                <ListItemCom value={selectedMonth}/>
                <ListItemCom value={"176"}/>
                <ListItemCom value={"199.585.900"}/>
                <ListItemCom value={"79.530.200"}/>
                <ListItemCom value={"55%"}/>
              </UnorderedList>
            </Box>

            <Box ml={20}>
              <UnorderedList listStyleType={"none"}>
                <ListItemCom value={"Cip Paga"}/>
                <ListItemCom value={"Integrado"}/>
                <ListItemCom value={"Por consultor"}/>
                <ListItemCom value={"%Efetivado Cip"}/>
                <ListItemCom value={"Efetivado Total"}/>
              </UnorderedList>
            </Box>
            <Box>
              <UnorderedList listStyleType={"none"}>
                <ListItemCom value={"48.143.105"}/>
                <ListItemCom value={"55.650.100"}/>
                <ListItemCom value={"310.541"}/>
                <ListItemCom value={"58%"}/>
                <ListItemCom value={"33%"}/>
              </UnorderedList>
            </Box>
          </Flex>
          <Flex>

          </Flex>
        </Flex>
       
      </Flex>
    </Box>
  );
};
