
import {Link, ListItem } from "@chakra-ui/react"
import { useEffect, useState } from "react"


export const List = ({value, link, ides}:any) => {
const [ide, setIde] = useState()



  return (
    
    <ListItem cursor='pointer' >
      {ides === value && 
        <Link href={link} textDecor={'none'} color={'#fffb00'} >
          {value}
        </Link>   
      }
      {ides !== value &&
        <Link href={link} textDecor={'none'} color={'#fff'} >
        {value}
        </Link>
      }
      </ListItem>
  )
}