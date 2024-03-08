// components/HeaderLatorio.js
import { Box, Flex, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlineUpdate } from "react-icons/md";

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
         <Flex justify={'center'} align={'center'} w={'50%'}>
          <Select name="dates" bg="white" onChange={handleMonthSelect} >
          
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
            <option value="1 ano">1 Ano </option>
          </Select>
          <MdOutlineUpdate fontSize={30} />
          </Flex>
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
