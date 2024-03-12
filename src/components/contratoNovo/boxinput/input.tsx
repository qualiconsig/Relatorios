import { Box, Input } from "@chakra-ui/react";


export function Inputs ({type, place, length, rest}: any) {

  return (
    <Input type={type} placeholder={place} maxLength={length} bg={'#fff'} mb={'10px'} {...rest} />
  )
}