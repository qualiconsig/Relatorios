'use client'
import { Box, ListItem, UnorderedList } from "@chakra-ui/react"
import { List } from "./list"

import { useState } from "react"


export const Header = ({id}:any) => {
   console.log(id)

  return (
    <Box>
      <Box bg="#586367">
        <UnorderedList color={"#FFF"} display={'flex'} gap={20} listStyleType={'none'} h={50} justifyContent={'flex-end'} alignItems={'end'} mr={15}>
          <List value={"Contrato novo"} link={"/send/Contrato novo"} ides={id}/>
          <List value={"Portabilidade"} link={"/send/Portabilidade"} ides={id}/>
          <List value={"Proposta"} link={"/send/Proposta"} ides={id}/>
          <List value={"Portal vendas"} link={"/send/Portal vendas"} ides={id}/>
        </UnorderedList>
      </Box>
    </Box>
  )
}