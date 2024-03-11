import { Flex, ListItem, Text } from "@chakra-ui/react"

export const ListItemCom = ({value, rest, secondValue}:any) => {

  return (
    <Flex mb={'25px'} border={'1px solid #E4E4E4'} p={'10px'} borderRadius={'7px'} color={rest} >
        <Text w={{ md:"10vw", lg:"15vw"}} p={'2px'} color={'black'}>{value}</Text>
        <Text >{secondValue}</Text>
    </Flex>
  )
}
