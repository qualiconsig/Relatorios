import { Box, Input } from "@chakra-ui/react";
import { Inputs } from "./input";

export function BoxInput ({children, type, place, length}:any) {

  return (
    <Box w={'80%'} borderRadius={'10px'} margin={'0 auto'}>
      {children}
    </Box>
  )
}