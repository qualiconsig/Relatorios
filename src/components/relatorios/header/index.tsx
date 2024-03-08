// components/HeaderLatorio.js
import { Box, Flex, Input, Select } from "@chakra-ui/react";
import { useState } from "react";

export const HeaderLatorio = ({ setSelectedMonth }:any) => {

  const handleMonthSelect = (event:any) => {
    const month = event?.target.value;
    setSelectedMonth(month); // Atualize o estado no componente pai
    
  };
  

  return (
    <Box w="100vw" display="flex" justifyContent="center">
      <Flex
        w="85vw"
        bg="gray.50"
        h="10vh"
        p="0 10px 0 10px"
        flexDir="column"
        justify="center"
        borderRadius={14}
      >
        <Flex gap={20}>
          <Select name="dates" bg="white" onChange={handleMonthSelect}>
            <option value="Janeiro">Janeiro</option>
            <option value="Fevereiro">Fevereiro</option>
            <option value="Março">Março</option>
            <option value="Abril">Abril</option>
            <option value="Maio">Maio</option>
            <option value="Junho">Junho</option>
            <option value="Julho">Julho</option>
            <option value="Agosto">Agosto</option>
            <option value="Setembro">Setembro</option>
            <option value="Outubro">Outubro</option>
            <option value="Novembro">Novembro</option>
            <option value="Dezembro">Dezembro</option>
          </Select>
          <Input
            type="text"
            name="name"
            placeholder="Nome gerente"
            bg="white"
          />
        </Flex>
        {/* Outros elementos do cabeçalho */}
      </Flex>
    </Box>
  );
};
