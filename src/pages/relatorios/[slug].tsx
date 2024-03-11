import { FilterDatas } from "@/components/relatorios/filterRelatories";
import { HeaderLatorio } from "@/components/relatorios/header";
import { Box, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Relatorio () {

  const [selectedMonth, setSelectedMonth] = useState("");
  const param = useRouter().query.slug
  
  return (
    <Box bg="#DCDDE1" h="100vh">
      <HeaderLatorio setSelectedMonth={setSelectedMonth} how={param} /> 
      <Box>
        <FilterDatas selectedMonth={selectedMonth} /> 
      </Box>
    </Box>
  );
}