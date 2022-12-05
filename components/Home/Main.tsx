import {
  Box,
  Card,
  chakra,
  Flex,
  Image,
  shouldForwardProp,
  SimpleGrid,
  Skeleton,
  Text,
} from '@chakra-ui/react'
import {isValidMotionProp, motion} from 'framer-motion'
import React from 'react'

const images = [
  'universe',
  'science',
  'technology',
  'snow',
  'nature',
  'ocean',
  'city',
  'abstract',
  'architecture',
]

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

const HomePage = () => {
  const imageCards = images.map((e) => <ImageCard key={e} keyword={e} />)

  return (
    <Flex justify={'center'}>
      <SimpleGrid spacing={6} columns={3}>
        {imageCards}
      </SimpleGrid>
    </Flex>
  )
}

const ImageCard = ({keyword}: {keyword: string}) => {
  return (
    <Card maxW={'sm'} pos="relative">
      <ChakraBox whileHover={{scale: 1.1}}>
        <Image
          objectFit={'cover'}
          src={`https://source.unsplash.com/random/250x250/?${keyword}`}
          borderRadius="lg"
          fallback={<Skeleton w={'250px'} h={'250px'} borderRadius="lg" />}
          opacity="0.5"
        />
        <Text
          width="full"
          display={'flex'}
          justifyContent="center"
          //   borderWidth={1}
          top="45%"
          pos={'absolute'}
          color="white"
          fontSize={'large'}
        >
          {keyword.toUpperCase()}
        </Text>
      </ChakraBox>
    </Card>
  )
}

export default HomePage
