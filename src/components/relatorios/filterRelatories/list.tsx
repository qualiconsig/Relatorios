import { ListItem } from "@chakra-ui/react"

export const ListItemCom = ({value, rest}:any) => {

  return (
    <ListItem mb={'25px'} border={'1px solid #E4E4E4'} p={'10px'} borderRadius={'7px'} color={rest}>{value}</ListItem>
  )
}
