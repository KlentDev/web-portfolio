import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Divider,
  Box,
  keyframes,
} from '@chakra-ui/react'
import Details from './Detail'

const DetailSection = () => {
  const headingColor = useColorModeValue('teal.400', 'cyan.300')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const dividerColor = useColorModeValue('gray.200', 'gray.600')
  const glowColor = useColorModeValue(
    'rgba(56, 178, 172, 0.6)',
    'rgba(94, 234, 212, 0.6)'
  )

  const pulseGlow = keyframes`
      0% {
        box-shadow: 0 0 6px ${glowColor}, 0 0 12px ${glowColor}, 0 0 18px ${glowColor};
      }
      50% {
        box-shadow: 0 0 14px ${glowColor}, 0 0 28px ${glowColor}, 0 0 42px ${glowColor};
      }
      100% {
        box-shadow: 0 0 6px ${glowColor}, 0 0 12px ${glowColor}, 0 0 18px ${glowColor};
      }
    `

  return (
    <Stack
      spacing={{ base: 8, md: 12 }}
      width="100%"
      maxW="6xl"
      margin="0 auto"
      align="flex-start"
      px={{ base: 4, md: 0 }}
    >
      <Heading
        size="2xl"
        fontWeight="extrabold"
        color={headingColor}
        sx={{ fontVariantCaps: 'small-caps' }}
        letterSpacing="wider"
      >
        💼 WHAT I DO?
      </Heading>
      <Box
        h="3px"
        w="350px"
        mt={3}
        bg="teal.300"
        borderRadius="full"
        animation={`${pulseGlow} 2s ease-in-out infinite`}
      />

      <Text
        fontSize={{ base: 'md', md: 'sm' }}
        lineHeight="taller"
        color={textColor}
        maxW="1xl"
        letterSpacing="wide"
        userSelect="text"
      >
        From intuitive mobile apps 📱 to sleek user interfaces 💻, I create
        digital experiences that are visually compelling and thoughtfully
        engineered. My passion for clean code, seamless UX, and boundary-pushing
        design ensures every project delivers both functionality and flair. Dive
        into the stack of tools and skills that power my creative workflow 🚀.
      </Text>

      <Divider borderColor={dividerColor} my={6} />

      <Details />
    </Stack>
  )
}

export default memo(DetailSection)
