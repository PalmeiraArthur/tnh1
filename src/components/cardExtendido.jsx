import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const CardExtendido = (title, image=null, link, description) => {
  return (
    <Box borderRadius={'sm'} boxShadow={'sm'} bgColor={'#373737'}>
        <Box p={4}>
            <Image src={image} alt={title} boxSize='90%' objectFit='cover' />
        </Box>
    </Box>
  )
}

export default CardExtendido