import {Box, Container, Text} from '@chakra-ui/react'
import React from 'react'

const MainHeader = () => {
  return (
    <Box color={'white'}>
      <Container textAlign={'center'} py={10}>
        <Text fontSize={'7xl'}>Walle</Text>
        <Text fontSize={'large'}>This world shall know code</Text>
      </Container>
    </Box>
  )
}

export default MainHeader
