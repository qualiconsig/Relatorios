'use client'
import { Header } from "@/components/Header";
import { Navigation } from "@/components/page2/nav";
import { Page } from "@/components/page2/pagetotal";
import { Box } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useRouter } from 'next/router'


export default function secodPage () {
  const router = useRouter()
  const params = useParams()
  
  const slug = (router.query.slug)
  return (
    <Box>
      <Box>
        <Header id={slug}/>
        <Page id={slug}/>
      </Box>
    </Box>
  )
}