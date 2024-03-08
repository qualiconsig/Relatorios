import { FilterDatas } from "@/components/relatorios/filterRelatories";
import { HeaderLatorio } from "@/components/relatorios/header";
import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Relatorio () {

  const [selectedMonth, setSelectedMonth] = useState(""); 
  return (
    <Box bg="gray.600" h="100vh">
      <HeaderLatorio setSelectedMonth={setSelectedMonth} /> 
      <Box>
        <FilterDatas selectedMonth={selectedMonth} /> 
      </Box>
    </Box>
  );
}