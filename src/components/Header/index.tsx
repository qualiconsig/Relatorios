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
          <List value={"Contrato novo"} link={"/pagetwo/Contrato novo"} ides={id}/>
          <List value={"Portabilidade"} link={"/pagetwo/Portabilidade"} ides={id}/>
          <List value={"Proposta"} link={"/pagetwo/Proposta"} ides={id}/>
          <List value={"Portal vendas"} link={"/pagetwo/Portal vendas"} ides={id}/>
        </UnorderedList>
      </Box>
    </Box>
  )
}