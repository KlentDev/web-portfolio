import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Link,
  Icon,
  Box,
  useColorModeValue,
  keyframes,
} from '@chakra-ui/react'
import { RiCopyleftLine, RiGithubFill } from 'react-icons/ri'

const GetInTouch = () => {
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const linkColor = useColorModeValue('teal.700', 'teal.300')
  const glowColor = useColorModeValue(
    'rgba(56, 178, 172, 0.5)',
    'rgba(94, 234, 212, 0.4)'
  )

  const pulseGlow = keyframes`
    0% {
      box-shadow: 0 0 4px ${glowColor}, 0 0 8px ${glowColor};
    }
    50% {
      box-shadow: 0 0 12px ${glowColor}, 0 0 24px ${glowColor};
    }
    100% {
      box-shadow: 0 0 4px ${glowColor}, 0 0 8px ${glowColor};
    }
  `

  return (
    <Stack
      width={{ base: '100%', md: '90%', lg: '70%' }}
      spacing={{ base: 8, xl: 10 }}
      as="footer"
      px={{ base: 4, md: 8 }}
      py={{ base: 10, md: 20 }}
    >
      <Heading
        size="2xl"
        fontWeight="bold"
        fontFamily="'Poppins', sans-serif"
        letterSpacing="wide"
        style={{ fontVariantCaps: 'small-caps' }}
        color={textColor}
        textAlign={{ base: 'center', md: 'left' }}
      >
        Send me a message!
      </Heading>

      {/* Glowing separator line with responsive width */}
      <Box
        h="3px"
        w={{ base: '100%', sm: '80%', md: '60%', lg: '350px' }}
        mt={3}
        bg="teal.300"
        borderRadius="full"
        animation={`${pulseGlow} 2s ease-in-out infinite`}
        alignSelf={{ base: 'center', md: 'flex-start' }}
      />

      <Text
        fontSize="lg"
        color={textColor}
        lineHeight="taller"
        fontWeight="medium"
        textAlign={{ base: 'center', md: 'left' }}
      >
        I’m kind of an introvert 🤫, so I might be slow to reply — but I
        genuinely enjoy good conversations when my social battery ⚡ isn’t
        drained. From code to anime, games to design, or just random nerdy chats
        🤓— I’m always open to connect.
        <br />
        Feel free to connect with me on social media or send me an{' '}
        <Link
          href="mailto:klentmickobering@gmail.com"
          color={linkColor}
          fontWeight="bold"
          _hover={{ textDecoration: 'underline' }}
        >
          email 📩
        </Link>
        .
      </Text>

      <Box
        textAlign="center"
        fontFamily="monospace"
        pt={{ base: 10, lg: 20 }}
        pb={{ base: 6, lg: 12 }}
        color={textColor}
      >
        <Link
          href="https://github.com/KlentDev"
          target="_blank"
          rel="noreferrer"
          _hover={{ color: linkColor }}
        >
          <Text>
            <Icon as={RiGithubFill} h={6} w={6} /> <br />
            Designed and built with ❤️ <br />
            Klent Micko Bering, CT <Icon as={RiCopyleftLine} /> 2025
          </Text>
        </Link>
      </Box>
    </Stack>
  )
}

export default memo(GetInTouch)
