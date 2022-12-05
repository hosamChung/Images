import {Box, Container, Text} from '@chakra-ui/react'
import React from 'react'
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'

interface IProps {
  children?: React.ReactNode
}

const MainLayout = ({children}: IProps) => {
  return (
    <Box bgColor={'blackAlpha.900'}>
      <MainHeader />
      {children}
      <MainFooter />
    </Box>
  )
}

export default MainLayout
