// pages/index.js

import { motion } from 'framer-motion';
import qu from '../../../public/qu.png'
import load from '../../../public/load.png'
import Image from 'next/image';
import { Box, Flex } from '@chakra-ui/react';


const Loading = () => {
  return (
    <Flex justify={'center'} flexDir={'column'} align={'center'}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box h={'50%'} w={"50%"} margin={'0 auto'}>
         <Image alt='qualiconsig' src={qu}/>
        </Box>
       
      </motion.h1>
      <div>
      <motion.div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '5px',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <Image alt='carregando' src={load}/>
      </motion.div>
    </div>
    </Flex>
  );
};

export default Loading;
