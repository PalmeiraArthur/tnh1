import { Box, Input, InputGroup } from '@chakra-ui/react'
import React from 'react'

import { FaMicrophone, FaSearch } from 'react-icons/fa'
const SearchBar = () => {
  return (
    <Box m={2}>
        <InputGroup 
            startElement={<FaSearch color='#F7EDE2' onClick={() => console.log('pesquisar...')} />}
            endElement={<FaMicrophone color='#F7EDE2' onClick={() => console.log('ativando pesquisa por voz...')} cursor={'pointer'}/>}
        >
        <Input
            placeholder='Pesquisar...'
            bgColor={'#373737'}
            size={'sm'}
            boxShadow={'sm'}
        />
        </InputGroup>
    </Box>
  )
}

export default SearchBar