import {Box, Container, Stack, Text} from '@chakra-ui/react'
import React from 'react'

const MainHeader = () => {
  return (
    <Box color={'white'}>
      <Stack py={10} align="center">
        <Text fontSize={'7xl'}>Walle</Text>
        <Text fontSize={'large'}>This world shall know code</Text>
      </Stack>
    </Box>
  )
}

export default MainHeader
